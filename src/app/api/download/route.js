import { NextResponse } from "next/server";
import puppeteer from "puppeteer";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  try {
    const res = await fetch(`https://api.anonfiles.com/v2/file/${id}/info`);
    const data = await res.json();

    const { full } = data?.data?.file.url;

    // puppeteer to scrap download url
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(full);
    const [el] = await page.$x('//*[@id="download-url"]');
    const href = await el.getProperty("href");
    const scrTxt = await href.jsonValue();
    console.log(scrTxt);
    browser.close();

    //return response
    return NextResponse.json({
      message: "success",
      data,
      url: full,
      downloadURL: scrTxt,
    });
  } catch (error) {
    return NextResponse.json({ error: "somthing wrong happened" });
  }
}
