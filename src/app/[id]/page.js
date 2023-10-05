import React from "react";
import styled from "./page.module.css";
import { SlCloudDownload } from "react-icons/sl";
import { storage } from "@/lib/firebase";
import { getDownloadURL, list, listAll, ref } from "firebase/storage";
import NotFound from "./not-found";

export async function generateStaticParams({ params }) {
  const response = await fetch(
    "https://firebasestorage.googleapis.com/v0/b/file-uploader-a0f03.appspot.com/o",
    { cache: "no-cache" }
  );
  const data = await response.json();
  return data.items.map((file) => ({
    id: file.name,
  }));
}

export default async function Page({ params }) {
  const filename = params.id;
  const storageRef = ref(storage, filename);
  const downloadURL = await getDownloadURL(storageRef);

  if (!downloadURL) {
    return NotFound();
  }

  console.log(downloadURL);
  return (
    <>
      <main
        className={styled.container}
        href={downloadURL}
        download={"songmp3.mp3_u_srgBNYxwHhFZ3be5LY1"}
      >
        <h2>File Name: {params.id}</h2>
        {/* <h2>file size: {size?.readable}</h2> */}
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
