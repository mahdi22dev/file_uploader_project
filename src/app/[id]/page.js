import React from "react";
import styled from "./page.module.css";
import { SlCloudDownload } from "react-icons/sl";
import { fetchHook } from "@/lib/hooks/hooks";
import { notFound } from "next/navigation";
// import { FetchdownloadURL } from "@/lib/utils/puppeteer";
// import puppeteer from "puppeteer";
// import { FetchdownloadURL } from "@/lib/utils/puppeteer";

export const dynamicParams = true;

export const metadata = {
  title: "file name",
  descreption: "",
};
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
  const response = await fetch(
    `https://api.anonfiles.com/v2/file/${params.id}/info`
  );
  if (!response.ok) {
    return notFound();
  }
  const data = await response.json();
  if (!data) {
    return notFound();
  }
  const { full } = await data?.data?.file.url;
  const { name, size } = await data?.data?.file?.metadata;

  // const downloadURL = await FetchdownloadURL(full);

  return (
    <>
      <main className={styled.container}>
        <h2>File Name: {name}</h2>
        <h2>file size: {size?.readable}</h2>
        <button className={styled.button}>
          <span>
            <a href={""}>
              <SlCloudDownload />
              Download
            </a>
          </span>
        </button>
      </main>
    </>
  );
}
