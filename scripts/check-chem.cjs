const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  
  try {
    console.log("Navigating to Chemical Formula Calculator...");
    await page.goto('http://localhost:4321/tools/molar-mass-calculator', { waitUntil: 'networkidle0' });
    
    console.log("Filling form...");
    await page.type('.chem-input', 'H2O');
    await page.click('button[type="submit"]');
    
    await new Promise(r => setTimeout(r, 500));
    const resultVisible = await page.$eval('.result-section', el => !el.classList.contains('hidden'));
    const resultText = await page.$eval('.molar-mass-val', el => el.innerText);
    console.log(`Chem Result Visible: ${resultVisible}, Value: ${resultText}`);
    
  } catch (err) {
    console.error("Audit failed:", err);
  } finally {
    await browser.close();
  }
})();
