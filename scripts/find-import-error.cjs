const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  
  page.on('pageerror', err => {
    console.log('PAGE ERROR:', err.message, 'ON:', page.url());
  });
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('CONSOLE ERROR:', msg.text(), 'ON:', page.url());
    }
  });
  
  try {
    console.log("Checking Tools Index");
    await page.goto('http://localhost:4324/tools', { waitUntil: 'networkidle0' });
  } catch(e) {}
  
  await browser.close();
})();
