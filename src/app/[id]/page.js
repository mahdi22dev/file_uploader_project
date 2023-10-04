import React from "react";
import styled from "./page.module.css";
import { SlCloudDownload } from "react-icons/sl";
import { fetchWebsite } from "@/lib/cheerio";
import { storage } from "@/lib/firebase";
import { getDownloadURL, ref } from "firebase/storage";
import NotFound from "./not-found";

// export async function generateStaticParams({ params }) {
//   const response = await fetch(
//     "https://file-uploader-a0f03-default-rtdb.firebaseio.com/newdata/__collections__.json",
//     { cache: "force-cache" }
//   );
//   const data = await response.json();
//   const files = Object.keys(data).map((key) => ({
//     ...data[key],
//   }));
//   const list = Object.keys(files[0]).map((obj) => {
//     return { id: obj.toString() };
//   });

//   return list;
// }

export default async function Page({ params }) {
  const filename = params.id;
  const storageRef = ref(storage, filename);
  const downloadURL = await getDownloadURL(ref(storageRef))
    .then((url) => {
      // `url` is the download URL for 'images/stars.jpg'

      // This can be downloaded directly:
      const xhr = new XMLHttpRequest();
      xhr.responseType = "blob";
      xhr.onload = (event) => {
        const blob = xhr.response;
      };
      xhr.open("GET", url);
      xhr.send();
    })
    .catch((error) => {
      // Handle any errors
    });
  if (!downloadURL) {
    return NotFound();
  }
  console.log(downloadURL);
  return (
    <>
      <main className={styled.container}>
        <h2>File Name: {params.id}</h2>
        {/* <h2>file size: {size?.readable}</h2> */}
        <button className={styled.button}>
          <span>
            <a href={downloadURL} download>
              <SlCloudDownload />
              Download
            </a>
          </span>
        </button>
      </main>
    </>
  );
}
