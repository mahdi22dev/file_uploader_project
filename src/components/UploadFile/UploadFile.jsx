"use client";
import React, { useEffect, useState } from "react";
import MyDropzone from "@/components/dropzone/Dropzone";
import "react-toastify/dist/ReactToastify.css";
import { useGlobalContext } from "@/context/themecontext/ThemeContext";
import styled from "./uploadfile.module.css";
import { SlCloudUpload } from "react-icons/sl";
import {
  bytesToSize,
  formatFileSize,
  notify,
  notifySuccesUpload,
} from "@/lib/utils/utils";
import Links from "@/components/links/Links";
import CustomError from "../CustomError/CustomError";
import { ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "@/lib/firebase";
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
      try {
        const filename = encodeURIComponent(fileContext[0].name);
        console.log(filename);
        const path = `/${id}/${filename}`;
        const filesize = formatFileSize(fileContext[0].size);
        const metadata = {
          customMetadata: { name: fileContext[0].name, size: filesize },
        };
        const storageRef = ref(storage, path);

        const uploadTask = uploadBytesResumable(
          storageRef,
          fileContext[0],
          metadata
        );

        uploadTask.on("state_changed", (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setUploadProgress(progress);
        });

        await uploadTask;

        let link = `https://file-uploader-project.vercel.app/${id}/${filename}`;
        const linkObj = { id, link, name: fileContext[0].name };
        setLinks([...links, linkObj]);
        setLoading(false);
        notifySuccesUpload();
        setUploadProgress("");
        setFileContext([]);
      } catch (error) {
        setLoading(false);
        setError(true);
        console.log(error);
        throw new Error(error);
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
