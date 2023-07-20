import React from "react";
import styled from "./page.module.css";
import { SlCloudDownload } from "react-icons/sl";
import { fetchHook } from "@/lib/hooks/hooks";
// import { FetchdownloadURL } from "@/lib/utils/puppeteer";
// import puppeteer from "puppeteer";
// import { FetchdownloadURL } from "@/lib/utils/puppeteer";

export const dynamicParams = true;

export async function generateStaticParams({ params }) {
  const data = await fetchHook(
    "https://file-uploader-a0f03-default-rtdb.firebaseio.com/__collections__.json",
    { cache: "force-cache" }
  );

  const files = Object.keys(data).map((key) => ({
    ...data[key],
  }));

  const list = Object.keys(files[0]).map((obj) => {
    return { id: obj.toString() };
  });

  return list;
}

export default async function Page({ params }) {
  let data;
  try {
    const response = await fetch(
      `https://api.anonfiles.com/v2/file/${params.id}/info`
    );
    if (!response.ok) {
      return notFound();
    }
    data = await response.json();
  } catch (error) {
    console.log(error);
  }

  const { full } = await data?.data?.file.url;
  const { name, size } = await data?.data?.file?.metadata;
  console.log(data);

  // const downloadURL = await FetchdownloadURL(full);

  return (
    <>
      <main className={styled.container}>
        <h2>File Name: {name}</h2>
        <h2>file size: {size?.readable}</h2>
        <button className={styled.button}>
          <span>
            <a href={downloadURL}>
              <SlCloudDownload />
              Download
            </a>
          </span>
        </button>
      </main>
    </>
  );
}
