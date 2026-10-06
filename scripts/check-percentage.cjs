const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  
  try {
    console.log("Navigating to Percentage Calculator...");
    await page.goto('http://localhost:4321/tools/percentage-calculator', { waitUntil: 'networkidle0' });
    
    console.log("Filling form...");
    await page.type('#calc1-percent', '50');
    await page.type('#calc1-value', '200');
    await page.click('button[type="submit"]');
    
    await new Promise(r => setTimeout(r, 500));
    
    const resultVisible = await page.$eval('.calc1-result', el => !el.classList.contains('hidden'));
    const resultText = await page.$eval('.calc1-result-val', el => el.innerText);
    console.log(`Percentage Result Visible: ${resultVisible}, Value: ${resultText}`);
    
  } catch (err) {
    console.error("Audit failed:", err);
  } finally {
    await browser.close();
  }
})();
