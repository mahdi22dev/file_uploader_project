"use client";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import styled from "./dropzone.module.css";
import { useGlobalContext } from "@/context/themecontext/ThemeContext";

// to utils

let rejected = [];

export default function MyDropzone({ uploadProgress }) {
  const { setFileContext, themeToggle, loading } = useGlobalContext();

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (acceptedFiles?.length) {
      setFileContext(() => [
        ...acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        ),
      ]);
    }
    rejected = [...rejectedFiles];
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    maxSize: 1073741824,
  });

  const classname =
    themeToggle == "white" ? ` ${styled.light}` : `${styled.dropzone} `;

  return (
    <>
      <div
        {...getRootProps({ className: classname })}
        aria-disabled={loading}
        style={{ backgroundColor: isDragActive && " var(--color-primary-a60)" }}
      >
        {loading ? (
          <>
            {/* <div className={styled.loader}></div> */}
            <p>{uploadProgress}%</p>
            <p className={styled.loadertext}>Uploading The File Please Wait</p>
          </>
        ) : (
          <div className={styled.animation}>
            <div className={styled.inputdiv}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='1em'
                height='1em'
                stroke-linejoin='round'
                stroke-linecap='round'
                viewBox='0 0 24 24'
                stroke-width='2'
                fill='none'
                stroke='currentColor'
                className={styled.icon}
              >
                <polyline points='16 16 12 12 8 16'></polyline>
                <line y2='21' x2='12' y1='12' x1='12'></line>
                <path d='M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3'></path>
                <polyline points='16 16 12 12 8 16'></polyline>
              </svg>
            </div>
          </div>
        )}
        <input {...getInputProps()} disabled={loading} />
        {loading ? null : (
          <>
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <p>Drag drop some files here, or click to select files</p>
            )}
          </>
        )}

        {
          rejected.length > 0 &&
            (rejected[0].errors[0].message.includes("larger") ? (
              <p style={{ color: "red" }}>File is larger than 1gb</p>
            ) : (
              <p style={{ color: "red" }}>{rejected[0].errors[0].message}</p>
            ))
          // <p style={{ color: "red" }}>{rejected[0].errors[0].message}</p>
        }
      </div>
    </>
  );
}
