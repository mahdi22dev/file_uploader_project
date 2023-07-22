import React from "react";
import styled from "./styles.module.css";
const Post = () => {
  return (
    <div className={styled.post}>
      <p className={styled.title}>title</p>
      <p className={styled.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cupiditate
        debitis hic consequatur. Saepe ex tempore eum animi veniam hic odio
        optio inventore beatae nostrum, quisquam fuga, dolores deserunt natus!
      </p>
    </div>
  );
};

export default Post;
