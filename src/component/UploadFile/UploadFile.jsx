"use client";
import React, { useState } from "react";
import MyDropzone from "../dropzone/Dropzone";
import "react-toastify/dist/ReactToastify.css";
import { useGlobalContext } from "@/context/themecontext/ThemeContext";
import styled from "./uploadfile.module.css";
import { SlCloudUpload } from "react-icons/sl";
import { bytesToSize, notify } from "@/lib/utils/utils";
import Links from "../links/Links";

const UploadFile = () => {
  const { fileContext, setLoading } = useGlobalContext();
  const [Error, setError] = useState(false);
  const [links, setLinks] = useState([]);
  const handleUpload = async () => {
    if (fileContext) {
      setLoading(true);
      const formData = new FormData();

      formData.append("file", fileContext[0]);

      try {
        const res = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        console.log(data);
        setLoading(false);
        const { id, name } = data?.info?.data?.file?.metadata;
        const link = `localhost:3000/${id}`;
        const linkObj = { id, link, name };
        setLinks([...links, linkObj]);
      } catch (error) {
        setLoading(false);
        setError(true);
        console.log(error);
      }
    }
    if (!fileContext) {
      notify();
    }
  };
  if (Error) {
    // try again button
    return <div>Error</div>;
  }

  return (
    <form
      className={styled.form}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <em>
        (1 file is the maximum number of files you can drop here and 1gb max
        size)
      </em>
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
