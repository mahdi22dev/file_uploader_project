import puppeteer from "puppeteer";

export const FetchdownloadURL = async (full) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(full);
  const [el] = await page.$x('//*[@id="download-url"]');
  const href = await el.getProperty("href");
  const scrTxt = await href.jsonValue();

  browser.close();
  return scrTxt;
};
