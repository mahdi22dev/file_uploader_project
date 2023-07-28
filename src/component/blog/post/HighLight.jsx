"use client";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
const HighLight = ({ children }) => {
  return (
    <SyntaxHighlighter
      language='jsx'
      customStyle={{
        padding: "20px",
        color: "var(--color-primary-a10)",
        borderRadius: "3px",
        width: "100%",
        marginBottom: "20px",
      }}
      style={atomOneDark}
    >
      {children}
    </SyntaxHighlighter>
  );
};

export default HighLight;
