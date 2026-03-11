const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const dir = path.join(__dirname, '..');
const htmlPath = path.join(dir, 'index.html');
const pdfPath = path.join(dir, 'cv.pdf');
const fileUrl = 'file://' + htmlPath.replace(/\\/g, '/');

// Use system Chrome on macOS if available (avoids "Could not find Chrome" when using puppeteer-core)
const isMac = process.platform === 'darwin';
const systemChrome = isMac && fs.existsSync('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome')
  ? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  : null;

const launchOptions = { headless: 'new' };
if (systemChrome) launchOptions.executablePath = systemChrome;

(async () => {
  if (!fs.existsSync(htmlPath)) {
    console.error('index.html not found at', htmlPath);
    process.exit(1);
  }
  const browser = await puppeteer.launch(launchOptions);
  const page = await browser.newPage();
  await page.goto(fileUrl, { waitUntil: 'networkidle0' });
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '12mm', right: '12mm', bottom: '12mm', left: '12mm' },
  });
  await browser.close();
  console.log('PDF saved:', pdfPath);
})();
