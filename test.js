const puppeteer = require("puppeteer");

//screenshot
(async () => {
  const browser = await puppeteer.launch({ headless: false, slowMo: 550 });
  const page = await browser.newPage();
  await page.goto("https://beta.hk.co/");
  await page.screenshot({ path: "example.png" });

  await browser.close();
})();

