const puppeteer = require('puppeteer');


(async () => {
  const browser = await puppeteer.launch({
    executablePath: process.env.CHROME_BIN || undefined,
    args: ['--disable-dev-shm-usage']
  });
  const page = await browser.newPage();
  await page.goto('https://google.com');
  await page.screenshot({path: './store/foo-example.png'});

  await browser.close();
})();