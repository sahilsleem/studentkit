const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  
  try {
    console.log("Navigating to Home...");
    await page.goto('http://localhost:4321', { waitUntil: 'networkidle0' });
    
    // Check what is intercepting clicks on anchors
    const unclickable = await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('a'));
      const bad = [];
      for (const a of links) {
        if (!a.offsetParent) continue; // hidden
        
        const rect = a.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) continue;
        
        // Find center of link
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        
        const topElement = document.elementFromPoint(x, y);
        if (topElement && topElement !== a && !a.contains(topElement)) {
          bad.push({
            text: a.innerText,
            href: a.href,
            interceptedBy: topElement.tagName + '.' + topElement.className
          });
        }
      }
      return bad;
    });
    
    console.log(`Links intercepted by other elements:`, unclickable);
    
  } catch (err) {
    console.error("Audit failed:", err);
  } finally {
    await browser.close();
  }
})();
