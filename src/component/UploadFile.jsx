"use client";
import axios from "axios";
import React, { useState } from "react";

const UploadFile = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      // Make a POST request to the API endpoint
      fetch("https://api.anonfiles.com/upload", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          console.log("File uploaded successfully: " + response);
          // Handle the API response as needed
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
          // Handle the error condition
        });
    } else {
      console.log("No file selected");
    }
  };
  return (
    <div>
      <input type='file' onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadFile;
