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

const FeaturedPosts = ({ post }) => {
  const { title, slug, readtime, date, author, image } = post.fields;

  return (
    <div className={styled.left_featured_posts}>
      <div className={styled.left_featured_posts_image}>
        <Image
          src={`https:${image.fields.file.url}`}
          alt={image.fields.file.title}
          fill
        ></Image>
      </div>

      <div>
        <Link href={`/blog/posts/${slug}`}>
          <p className={styled.left_featured_posts_title}>{title}</p>
        </Link>
        {/* into profile component */}
        <div className={styled.profile}>
          <div className={styled.profile_image}>
            <Image
              src={`https:${author.fields.picture.fields.file.url}`}
              alt={author.fields.picture.fields.file.title}
              fill
            ></Image>
          </div>
          <div className={styled.profile_info}>
            <p className={styled.profile_name}>mahdi idrissi</p>
            <p className={styled.publish_date}>23/7/2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
