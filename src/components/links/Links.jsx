import { copyToclipBoard, notifyClipBoard } from "@/lib/utils/utils";
import React from "react";
import { FaCopy } from "react-icons/fa";

const Links = ({ link, className }) => {
  return (
    <div style={{ minWidth: "fit-content" }} className={className}>
      <p style={{ padding: "10px", paddingLeft: "5px" }}>{link.link}</p>
      <FaCopy
        onClick={() => {
          copyToclipBoard(link.link);
          notifyClipBoard();
        }}
      />
    </div>
  );
};

export default Links;
