import React from "react";
import { notFound } from "next/navigation";
import styled from "./page.module.css";
import { SlCloudDownload } from "react-icons/sl";
import puppeteer from "puppeteer";

// export const dynamicParams = true;

export async function generateStaticParams({ params }) {
  const response = await fetch(
    "https://file-uploader-a0f03-default-rtdb.firebaseio.com/__collections__.json",
    { cache: "force-cache" }
  );
  const data = await response.json();
  const files = Object.keys(data).map((key) => ({
    ...data[key],
  }));
  const list = Object.keys(files[0]).map((obj) => {
    return { id: obj.toString() };
  });
  console.log(list);
  return list;
}

export default async function Page({ params }) {
  const res = await fetch(
    `https://api.anonfiles.com/v2/file/${params.id}/info`
  );
  if (!res.ok) {
    return notFound();
  }
  const data = await res.json();
  const { full } = data?.data?.file.url;
  const { name, size } = data?.data?.file?.metadata;

  // puppeteer to scrap download url
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36"
  );
  await page.goto(full);
  const [el] = await page.$x('//*[@id="download-url"]');
  const href = await el.getProperty("href");
  const scrTxt = await href.jsonValue();
  console.log(scrTxt);
  browser.close();

  return (
    <>
      <main className={styled.container}>
        <h2>File Name: {name}</h2>
        <h2>file size: {size?.readable}</h2>
        <button className={styled.button}>
          <span>
            <a href={"www.google.com"}>
              <SlCloudDownload />
              Download
            </a>
          </span>
        </button>
      </main>
    </>
  );
  // ...
}
