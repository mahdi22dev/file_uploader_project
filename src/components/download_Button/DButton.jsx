"use client";
import { SlCloudDownload } from "react-icons/sl";
const DButton = ({ classsname, downloadURL, name }) => {
  // stpping progress bar when use click download button
  const handleDownload = (e) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    const anchor = document.createElement("a");
    anchor.style.display = "none";
    anchor.href = downloadURL;
    anchor.download = name;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  return (
    <button className={classsname} onClick={handleDownload}>
      <span>
        <SlCloudDownload />
        Download
      </span>
    </button>
  );
};

export default DButton;
