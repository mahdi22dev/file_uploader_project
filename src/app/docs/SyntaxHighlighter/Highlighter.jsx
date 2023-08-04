"use client";
import React, { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FaCopy } from "react-icons/fa";
import { copyToclipBoard } from "@/lib/utils/utils";
import { SlCheck } from "react-icons/sl";
import { code1, code2 } from "@/constans/constans";

const Highlighter = ({ link, requestType, response }) => {
  const [currentUrl, setCurrentUrl] = useState("");
  const [copy, setCopy] = useState(false);
  const [codeCopy, setCodeCopy] = useState(false);

  useEffect(() => {
    // window object works only client componenet
    setCurrentUrl(`https://${window.location.hostname + link}`);
  }, []);

  useEffect(() => {
    if (copy) {
      setTimeout(() => {
        setCopy(false);
      }, 3000);
    }
    if (codeCopy) {
      setTimeout(() => {
        setCodeCopy(false);
      }, 3000);
    }
  }, [copy, codeCopy]);

  return (
    <>
      <div>
        <p>
          {requestType} : <span>{currentUrl}</span>
        </p>
        {copy ? (
          <SlCheck />
        ) : (
          <FaCopy
            onClick={() => {
              copyToclipBoard(currentUrl);
              setCopy(true);
            }}
          />
        )}
      </div>
      <div>
        <p>Code Example</p>
        {codeCopy ? (
          <SlCheck />
        ) : (
          <FaCopy
            onClick={() => {
              copyToclipBoard(
                link.includes("upload") ? code1(currentUrl) : code2(currentUrl)
              );
              setCodeCopy(true);
            }}
          />
        )}
      </div>
      <SyntaxHighlighter
        language='jsx'
        customStyle={{
          padding: "20px",
          color: "var(--color-primary-a10)",
          borderRadius: "3px",
          width: "100%",
        }}
        style={atomOneDark}
      >
        {link.includes("upload") ? code1(currentUrl) : code2(currentUrl)}
      </SyntaxHighlighter>

      <p>Response :</p>

      <SyntaxHighlighter
        language='jsx'
        customStyle={{
          padding: "20px",
          color: "var(--color-primary-a10)",
          borderRadius: "3px",
          width: "100%",
          marginTop: "20px",
        }}
        style={atomOneDark}
      >
        {response}
      </SyntaxHighlighter>
    </>
  );
};

export default Highlighter;
