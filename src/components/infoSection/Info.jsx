import React from "react";
import styled from "./infosection.module.css";

const Info = ({ item }) => {
  const { title, color, text } = item;
  return (
    <div className={styled.info}>
      <div className={styled.info_icon}>
        {<item.icon style={{ color: color }} />}
      </div>
      <p className={styled.info_title}>{title}</p>
      <p className={styled.info_text}>{text}</p>
    </div>
  );
};

export default Info;
