"use client";
import React, { useEffect, useState } from "react";
import MyDropzone from "@/components/dropzone/Dropzone";
import "react-toastify/dist/ReactToastify.css";
import { useGlobalContext } from "@/context/themecontext/ThemeContext";
import styled from "./uploadfile.module.css";
import { SlCloudUpload } from "react-icons/sl";
import { bytesToSize, notify } from "@/lib/utils/utils";
import Links from "@/components/links/Links";
import CustomError from "../CustomError/CustomError";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "@/lib/firebase";

const UploadFile = ({ req }) => {
  const { fileContext, setLoading } = useGlobalContext();
  const [Error, setError] = useState(false);
  const [links, setLinks] = useState([]);
  const handleUpload = async () => {
    if (fileContext) {
      setLoading(true);
      const formData = new FormData();
      formData.append("file", fileContext[0]);
      console.log(fileContext[0]);
      const storageRef = ref(storage, fileContext[0].name);
      try {
        // const res = await fetch("/api/upload", {
        //   method: "POST",
        //   body: formData,
        // });
        // const data = await res.json();
        // const { id, name } = data?.results?.metadata;
        // let link = `https:/${"file-uploader-project.vercel.app/"}/${id}`;
        // const linkObj = { id, link, name };
        // setLinks([...links, linkObj]);
        await uploadBytes(storageRef, fileContext[0]).then((snapshot) => {
          console.log("Uploaded a blob or file!");
        });
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
        throw new Error("upload failed");
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
      <MyDropzone />
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
        return <Links key={link.id} className={styled.links} link={link} />;
      })}
    </form>
  );
};

export default UploadFile;
