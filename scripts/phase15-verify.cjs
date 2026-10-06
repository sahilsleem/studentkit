const puppeteer = require('puppeteer');
const fs = require('fs');

const BASE_URL = 'http://localhost:4325';
const viewports = [
  { width: 320, height: 600 },
  { width: 375, height: 667 },
  { width: 390, height: 844 },
  { width: 768, height: 1024 },
  { width: 1440, height: 900 }
];

const results = {
  homepage: { searchWorks: false, popularToolsCount: 0, noDuplicates: false, spansCategories: false },
  responsive: [],
  toolPages: [],
  console: { exceptions: 0, errors: 0 }
};

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  
  page.on('console', msg => {
    if (msg.type() === 'error' && !msg.text().includes('favicon')) {
      results.console.errors++;
    }
  });
  page.on('pageerror', err => {
    results.console.exceptions++;
  });

  try {
    // 1. Homepage Checks
    await page.goto(BASE_URL, { waitUntil: 'networkidle0' });
    
    // Search check
    await page.type('#home-search', 'CGPA');
    await new Promise(r => setTimeout(r, 500));
    const searchResults = await page.$eval('#search-results', el => el.innerHTML);
    results.homepage.searchWorks = searchResults.includes('CGPA to Percentage');
    
    // Popular Tools check
    const popularCards = await page.$$eval('.tool-card', els => els.map(el => ({
      title: el.querySelector('h3').innerText.trim(),
      href: el.href,
      category: el.querySelector('span') ? el.querySelector('span').innerText.trim() : ''
    })));
    // There are tool cards in search results, we should only get the popular ones
    const popularSectionCards = await page.$$eval('section:nth-of-type(2) .tool-card', els => els.map(el => ({
      title: el.querySelector('h3').innerText.trim(),
      category: el.querySelector('span') ? el.querySelector('span').innerText.trim() : ''
    })));
    // Wait, the index has 3 sections. Hero, Categories, Popular Tools, Why...
    const featuredTitles = await page.$$eval('section:nth-of-type(3) .tool-card h3', els => els.map(el => el.innerText.trim()));
    const featuredCategories = await page.$$eval('section:nth-of-type(3) .tool-card span.mr-2', els => els.map(el => el.innerText.trim()));
    
    results.homepage.popularToolsCount = featuredTitles.length;
    results.homepage.noDuplicates = new Set(featuredTitles).size === featuredTitles.length;
    results.homepage.spansCategories = new Set(featuredCategories).size > 1;

    // 2. Responsive check
    for (const vp of viewports) {
      await page.setViewport(vp);
      const hasOverflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth;
      });
      results.responsive.push({ width: vp.width, overflow: hasOverflow });
    }

    // 3. Tool pages check (just a few)
    const testTools = [
      '/tools/cgpa-to-percentage',
      '/tools/quadratic-equation-solver',
      '/tools/mean-calculator',
      '/tools/molar-mass-calculator',
      '/tools/age-calculator'
    ];
    for (const t of testTools) {
      await page.goto(BASE_URL + t, { waitUntil: 'domcontentloaded' });
      const hasAdSlots = await page.$$eval('.ad-wrapper', els => els.length > 0);
      const toolWorks = await page.evaluate(() => {
        // Just checking if calculator form exists
        return !!document.querySelector('form, .calculator, input');
      });
      let hasOverflow = false;
      for (const vp of viewports) {
        await page.setViewport(vp);
        hasOverflow = hasOverflow || await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
      }
      results.toolPages.push({ url: t, hasAdSlots, toolWorks, overflow: hasOverflow });
    }

  } catch (e) {
    console.error(e);
  } finally {
    fs.writeFileSync('verification-ads.json', JSON.stringify(results, null, 2));
    await browser.close();
  }
})();
