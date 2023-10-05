import { copyToclipBoard, notifyClipBoard } from "@/lib/utils/utils";
import Link from "next/link";
import React from "react";
import { FaCopy } from "react-icons/fa";

const Links = ({ link, className }) => {
  return (
    <div style={{ minWidth: "fit-content" }} className={className}>
      <p style={{ padding: "10px", paddingLeft: "5px" }}>
        <Link href={link.link}>{link.name}</Link>
      </p>
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
