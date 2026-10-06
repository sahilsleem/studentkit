const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  
  try {
    console.log("Navigating to Home...");
    await page.goto('http://localhost:4322', { waitUntil: 'networkidle0' });
    
    // Check Category Links
    console.log("Checking Category Links on Homepage...");
    const catLinks = await page.$$eval('a[href^="/category/"]', links => links.map(a => a.href));
    console.log(`Found ${catLinks.length} category links.`);
    if (catLinks.length < 5) throw new Error("Category links missing from homepage!");
    
    // Check ToolCard Links
    const toolLinks = await page.$$eval('a[href^="/tools/"]', links => links.map(a => a.href));
    console.log(`Found ${toolLinks.length} tool links.`);
    if (toolLinks.length === 0) throw new Error("Tool links missing from homepage!");
    
    // Click Mathematics category
    console.log("Navigating to Mathematics Category...");
    await page.goto('http://localhost:4322/category/mathematics', { waitUntil: 'networkidle0' });
    
    const mathTools = await page.$$eval('a[href^="/tools/"]', links => links.map(a => a.href));
    console.log(`Found ${mathTools.length} tools in Mathematics category.`);
    
    // Breadcrumbs check
    const breadcrumbs = await page.$$eval('nav[aria-label="Breadcrumb"] a', links => links.map(a => a.innerText.trim()));
    console.log(`Breadcrumbs on category page: ${breadcrumbs.join(' -> ')}`);
    
    // Click a tool from category
    console.log("Navigating to quadratic-equation...");
    await page.goto('http://localhost:4322/tools/quadratic-equation', { waitUntil: 'networkidle0' });
    
    // Breadcrumbs check on tool page
    const toolBreadcrumbs = await page.$$eval('nav[aria-label="Breadcrumb"] a', links => links.map(a => ({ text: a.innerText.trim(), href: a.href })));
    console.log(`Tool breadcrumb links:`, toolBreadcrumbs);
    
    if (toolBreadcrumbs.length < 2) throw new Error("Breadcrumb for category is not a link!");
    
    console.log("SUCCESS! All navigation paths verified.");
  } catch (err) {
    console.error("Audit failed:", err);
  } finally {
    await browser.close();
  }
})();
