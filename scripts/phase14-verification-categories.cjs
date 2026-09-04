const puppeteer = require('puppeteer');
const fs = require('fs');

const BASE_URL = 'http://localhost:4325';
const results = {
  inventory: { total: 0, categories: [] },
  homepageTests: [],
  directTests: [],
  toolTests: [],
  console: { exceptions: 0, applicationErrors: 0, failedRequests: 0 }
};

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  
  page.on('console', msg => {
    if (msg.type() === 'error' && !msg.text().includes('favicon')) {
      results.console.applicationErrors++;
    }
  });
  page.on('pageerror', err => {
    results.console.exceptions++;
  });
  page.on('requestfailed', request => {
    results.console.failedRequests++;
  });

  try {
    // 1. Get Categories from Homepage
    await page.goto(BASE_URL, { waitUntil: 'networkidle0' });
    const categoryLinks = await page.$$eval('a[href^="/category/"]', els => els.map(el => {
      const name = el.querySelector('h3') ? el.querySelector('h3').innerText.trim() : '';
      return { href: el.href, name: name };
    }));
    
    // Deduplicate (since mobile/desktop menus might not have these, but let's be safe)
    const uniqueCats = [];
    for(const c of categoryLinks) {
       if(!uniqueCats.find(x => x.href === c.href) && c.name) {
          uniqueCats.push(c);
       }
    }
    
    results.inventory.total = uniqueCats.length;
    results.inventory.categories = uniqueCats;

    // 2. Test Homepage -> Category
    for (const cat of uniqueCats) {
      await page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });
      // Click the exact link
      await Promise.all([
        page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
        page.evaluate((href) => { document.querySelector(`a[href$="${new URL(href).pathname}"]`).click(); }, cat.href)
      ]);
      
      const newUrl = page.url();
      const isNotHome = new URL(newUrl).pathname !== '/';
      const headingExists = await page.$eval('h1', el => el.innerText.trim().length > 0).catch(()=>false);
      const hasTools = await page.$eval('.tool-card', el => !!el).catch(()=>false);
      
      results.homepageTests.push({
        category: cat.name,
        href: cat.href,
        destination: newUrl,
        categoryRendered: isNotHome && headingExists && hasTools,
        result: isNotHome && headingExists && hasTools ? "PASS" : "FAIL"
      });
    }

    // 3. Test Direct URL
    for (const cat of uniqueCats) {
      const response = await page.goto(cat.href, { waitUntil: 'domcontentloaded' });
      const status = response.status();
      const isNotHome = new URL(page.url()).pathname !== '/';
      const headingExists = await page.$eval('h1', el => el.innerText.trim().length > 0).catch(()=>false);
      
      results.directTests.push({
        category: cat.name,
        canonicalURL: cat.href,
        http: status,
        rendered: isNotHome && headingExists,
        result: status === 200 && isNotHome && headingExists ? "PASS" : "FAIL"
      });
    }

    // 4. Test Category -> Tool
    for (const cat of uniqueCats) {
      await page.goto(cat.href, { waitUntil: 'domcontentloaded' });
      const toolHref = await page.$eval('.tool-card', el => el.href).catch(()=>null);
      if (toolHref) {
        const response = await page.goto(toolHref, { waitUntil: 'domcontentloaded' });
        const toolTitle = await page.$eval('h1', el => el.innerText.trim()).catch(()=>'');
        results.toolTests.push({
          category: cat.name,
          representativeTool: toolTitle,
          result: response.status() === 200 && toolTitle ? "PASS" : "FAIL"
        });
      } else {
        results.toolTests.push({
          category: cat.name,
          representativeTool: 'None found',
          result: "FAIL"
        });
      }
    }

  } catch (e) {
    console.error(e);
  } finally {
    fs.writeFileSync('verification-categories.json', JSON.stringify(results, null, 2));
    await browser.close();
  }
})();
