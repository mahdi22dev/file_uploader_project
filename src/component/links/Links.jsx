import { copyToclipBoard, notifyClipBoard } from "@/lib/utils/utils";
import React from "react";
import { FaCopy } from "react-icons/fa";
import { toast } from "react-toastify";

const Links = ({ link, className }) => {
  return (
    <div className={className}>
      <p>{link.link}</p>
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
