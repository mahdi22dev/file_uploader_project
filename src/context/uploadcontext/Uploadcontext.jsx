"use client";
import React, { useContext, useState } from "react";

const UploadContext = React.createContext();
const Uploadprovider = ({ children }) => {
  return (
    <UploadContext.Provider value={{ setFileContext, fileContext }}>
      {children}
    </UploadContext.Provider>
  );
};

export const useUploadContext = () => {
  return useContext(UploadContext);
};

export { UploadContext, Uploadprovider };
