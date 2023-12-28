"use client";
import React, { useEffect, useState } from "react";
import MyDropzone from "@/components/dropzone/Dropzone";
import "react-toastify/dist/ReactToastify.css";
import { useGlobalContext } from "@/context/themecontext/ThemeContext";
import styled from "./uploadfile.module.css";
import { SlCloudUpload } from "react-icons/sl";
import {
  baseUrl,
  bytesToSize,
  formatFileSize,
  notify,
  notifySuccesUpload,
} from "@/lib/utils/utils";
import Links from "@/components/links/Links";
import CustomError from "../CustomError/CustomError";

import { nanoid } from "nanoid";

const UploadFile = ({ req }) => {
  const { fileContext, setLoading, setFileContext } = useGlobalContext();
  const [Error, setError] = useState(false);
  const [links, setLinks] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  console.log(uploadProgress);

  const handleUpload = async () => {
    if (fileContext) {
      setLoading(true);
      const formData = new FormData();
      formData.append("file", fileContext[0]);
      const id = nanoid();

      // Create an XMLHttpRequest object
      const xhr = new XMLHttpRequest();

      // Track upload progress
      xhr.upload.addEventListener("progress", (event) => {
        if (event.lengthComputable) {
          const percentComplete = (event.loaded / event.total) * 100;
          console.log(`Upload progress: ${percentComplete.toFixed(2)}%`);
          // Update your progress state or UI as needed
          setUploadProgress(percentComplete.toFixed(2));
        }
      });

      try {
        const filename = encodeURIComponent(fileContext[0].name);

        // Open the XMLHttpRequest with the POST method
        xhr.open(
          "POST",
          process.env.NEXT_PUBLIC_BACKEND_SERVER + "/upload",
          true
        );

        // Send the FormData with the file
        xhr.send(formData);

        // Listen for the XMLHttpRequest's state change
        xhr.onreadystatechange = () => {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
              const response = JSON.parse(xhr.responseText);
              console.log(response);
              if (response.success) {
                let link = `${baseUrl()}/${response.fileName}`;
                const linkObj = { id, link, name: fileContext[0].name };
                setLinks([...links, linkObj]);
                setLoading(false);
                notifySuccesUpload();
                setUploadProgress("");
                setFileContext([]);
              }
            } else {
              console.error("Upload failed:", xhr.statusText);
              setLoading(false);
              setError(true);
            }
          }
        };
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    }

    if (!fileContext) {
      notify();
    }
  };

  if (Error) {
    return <CustomError />;
  }

  return (
    <form
      className={styled.form}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <p className={styled.limits}>
        (1 file is the maximum number of files you can drop here and 1gb max
        size)
      </p>
      <MyDropzone uploadProgress={uploadProgress} />
      {/* selected file display */}
      <div className={styled.display}>
        {fileContext?.map((file) => {
          return (
            <>
              <p>
                File name: <span>{file.name}</span>
              </p>
              <p>
                File size: <span>{bytesToSize(file.size)}</span>
              </p>
            </>
          );
        })}
      </div>
      <button className={styled.button} onClick={handleUpload}>
        <span>
          <SlCloudUpload />
          Upload
        </span>
      </button>

      {links?.map((link) => {
        return <Links key={link.name} className={styled.links} link={link} />;
      })}
    </form>
  );
};

export default UploadFile;
