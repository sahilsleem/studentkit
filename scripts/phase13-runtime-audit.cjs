const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  
  try {
    console.log("Navigating to Home...");
    await page.goto('http://localhost:4321', { waitUntil: 'networkidle0' });
    
    // Check navigation links
    console.log("Checking navigation links...");
    const links = await page.$$eval('a', anchors => anchors.map(a => ({
      text: a.innerText.trim(),
      href: a.href,
      isClickable: window.getComputedStyle(a).pointerEvents !== 'none'
    })));
    
    console.log(`Found ${links.length} links on homepage.`);
    const unclickable = links.filter(l => !l.isClickable);
    if (unclickable.length > 0) {
      console.log("Unclickable links:", unclickable);
    }
    
    // Check pointer-events globally
    const elementsWithPointerEventsNone = await page.$$eval('*', els => 
      els.filter(e => window.getComputedStyle(e).pointerEvents === 'none').map(e => e.tagName + (e.className ? '.' + e.className : ''))
    );
    // console.log("Elements with pointer-events:none:", elementsWithPointerEventsNone);
    
    // Try to navigate to a tool
    console.log("Navigating to cgpa-to-percentage...");
    await page.goto('http://localhost:4321/tools/cgpa-to-percentage', { waitUntil: 'networkidle0' });
    
    console.log("Filling form...");
    await page.type('#cgpa', '9.5');
    await page.click('button[type="submit"]');
    
    // Wait a bit
    await new Promise(r => setTimeout(r, 500));
    
    const resultVisible = await page.$eval('#result-section', el => !el.classList.contains('hidden'));
    const resultText = await page.$eval('#result-value', el => el.innerText);
    console.log(`CGPA Result Visible: ${resultVisible}, Value: ${resultText}`);
    
    // Check Physics calculator (UnitAwareCalculator)
    console.log("Navigating to speed-calculator (UnitAwareCalculator)...");
    await page.goto('http://localhost:4321/tools/speed-calculator', { waitUntil: 'networkidle0' });
    
    console.log("Filling form...");
    const inputs = await page.$$('input[type="number"]');
    for(let input of inputs) {
      await input.type('10');
    }
    
    console.log("Clicking calculate...");
    await page.click('button[type="submit"]');
    
    await new Promise(r => setTimeout(r, 500));
    const unitResultVisible = await page.$eval('.unit-calc-result-section', el => !el.classList.contains('hidden'));
    const unitResultText = await page.$eval('.unit-calc-result-value', el => el.innerText);
    console.log(`Speed Calculator Result Visible: ${unitResultVisible}, Value: ${unitResultText}`);
    
    // Check console errors
    page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
    page.on('pageerror', err => console.log('BROWSER ERROR:', err.toString()));
    
  } catch (err) {
    console.error("Audit failed:", err);
  } finally {
    await browser.close();
  }
})();
