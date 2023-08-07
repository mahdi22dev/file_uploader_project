"use client";
import React from "react";

const ImageLoader = () => {
  return ({ src, width, quality }) => {
    return `${src}?w=${width}`;
  };
};

export default ImageLoader;
