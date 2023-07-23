import React from "react";
import styled from "../styles.module.css";
import Image from "next/image";
import Link from "next/link";

const first_post = {
  id: 1,
  readTime: 8,
  title: "how to use api handler in next js 13 app router",
  image: "/next.png",
  profileName: "mahdi idrissi",
  imageProfile: "/next.png",
  date: "",
};

const FeaturedFirstPost = () => {
  return (
    <>
      <div className={styled.first_featured_post_image}>
        <Image
          src={"/tech.jpg"}
          placeholder='blue'
          alt='next js app image'
          fill
        ></Image>
      </div>
      <p className={styled.readtime}>{first_post.readTime} min to read</p>
      <Link href={`/blog/posts/${first_post.id}`}>
        <p className={styled.featured_title}>{first_post.title}</p>
      </Link>
      <div className={styled.profile}>
        <div className={styled.profile_image}>
          <Image
            src={"/profile.jpg"}
            fill
            placeholder='blue'
            alt='profile name'
          ></Image>
        </div>
        <div className={styled.profile_info}>
          <p className={styled.profile_name}>mahdi idrissi</p>
          <p className={styled.publish_date}>23/7/2023</p>
        </div>
      </div>
    </>
  );
};

export default FeaturedFirstPost;
