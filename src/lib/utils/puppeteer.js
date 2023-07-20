// let puppeteer;
// let chrome = {};
// if (process.env.AWS_LAMBDA_FUNCTION_VERSION) {
//   chrome = require("chrome-aws-lambda");
//   puppeteer = require("puppeteer-core");
// } else {
//   puppeteer = require("puppeteer");
// }

import puppeteer from "puppeteer";

export const FetchdownloadURL = async (full) => {
  // let options = {};
  // if (process.env.AWS_LAMBDA_FUNCTION_VERSION) {
  //   options = {
  //     args: chromium.args,
  //     defaultViewport: chromium.defaultViewport,
  //     executablePath: await chromium.executablePath,
  //     headless: chromium.headless,
  //     ignoreHTTPSErrors: true,
  //   };
  // }
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(full);
  const [el] = await page.$x('//*[@id="download-url"]');
  const href = await el.getProperty("href");
  const scrTxt = await href.jsonValue();

  browser.close();
  return scrTxt;
};
