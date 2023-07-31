import puppeteer from "puppeteer-core";

export const FetchdownloadURL = async (full) => {
  const browser = await puppeteer.connect({
    browserWSEndpoint: `wss://chrome.browserless.io?token=a321c3f7-af02-416c-b66d-74ac414d1fa4`,
  });
  // const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(full);
  const [el] = await page.$x('//*[@id="download-url"]');
  const href = await el.getProperty("href");
  const scrTxt = await href.jsonValue();

  browser.close();
  return scrTxt;
};
