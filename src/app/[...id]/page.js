import React from "react";
import styled from "./page.module.css";
import DButton from "@/components/download_Button/DButton";
import { notFound } from "next/navigation";
import { formatFileSize } from "@/lib/utils/utils";

export default async function Page({ params }) {
  const fileid = decodeURIComponent(params.id);
  console.log(fileid);
  let metadata = { name: "", size: "" };
  const downloadURL =
    process.env.NEXT_PUBLIC_BACKEND_SERVER + "/get-file/" + fileid;
  const fetchMetaData = async () => {
    try {
      const data = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_SERVER + "/file-meta/" + fileid
      );
      const response = await data.json();
      if (response.success) {
        metadata = { ...response.fileMetadata };
        console.log(metadata);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error.message);
      throw new Error(error);
    }
  };

  if (!(await fetchMetaData())) {
    return notFound();
  }

  return (
    <>
      <main className={styled.container}>
        <h2>File Name: {metadata?.name}</h2>
        <h2>file size: {formatFileSize(metadata?.size)}</h2>

        <DButton
          classsname={styled.button}
          downloadURL={downloadURL}
          name={metadata?.name}
        />
      </main>
    </>
  );
}
