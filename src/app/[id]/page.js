import React from "react";
import styled from "./page.module.css";
import { SlCloudDownload } from "react-icons/sl";
import { storage } from "@/lib/firebase";
import { getDownloadURL, getMetadata, ref } from "firebase/storage";
import NotFound from "./not-found";

export default async function Page({ params }) {
  const filename = params.id;
  const storageRef = ref(storage, filename);
  const downloadURL = await getDownloadURL(storageRef);
  const metadata = await getMetadata(storageRef);
  const fileInfo = {
    name: metadata.customMetadata.name,
    size: metadata.customMetadata.size,
  };
  if (!downloadURL) {
    return NotFound();
  }
  return (
    <>
      <main
        className={styled.container}
        href={downloadURL}
        download={"songmp3.mp3_u_srgBNYxwHhFZ3be5LY1"}
      >
        <h2>File Name: {fileInfo.name}</h2>
        <h2>file size: {fileInfo?.size}</h2>
        <a
          className={styled.button}
          href={downloadURL}
          download={"songmp3.mp3_u_srgBNYxwHhFZ3be5LY1"}
        >
          <span>
            <SlCloudDownload />
            Download
          </span>
        </a>
      </main>
    </>
  );
}
