const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');

function getHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getHtmlFiles(filePath, fileList);
    } else if (filePath.endsWith('.html')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

(async () => {
  const files = getHtmlFiles(distDir);
  console.log(`Found ${files.length} HTML files.`);
  
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  
  page.on('pageerror', err => {
    console.log('PAGE ERROR:', err.message, 'ON:', page.url());
  });
  
  for (let i = 0; i < files.length; i++) {
    const relative = path.relative(distDir, files[i]).replace(/\\/g, '/').replace(/\/index\.html$/, '');
    const url = `http://localhost:4324/${relative === 'index.html' ? '' : relative}`;
    try {
      await page.goto(url, { waitUntil: 'domcontentloaded' });
    } catch(e) {}
  }
  
  console.log("Done checking all files.");
  await browser.close();
})();
