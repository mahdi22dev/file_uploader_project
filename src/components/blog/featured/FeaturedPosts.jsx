import React from "react";
import styled from "../styles.module.css";
import Image from "next/image";
import Link from "next/link";
import Profile from "./Profile";

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

      <div className={styled.left_featured_posts_info}>
        <Link href={`/blog/posts/${slug}`}>
          <p className={styled.left_featured_posts_title}>{title}</p>
        </Link>
        <Profile post={post} date={date} />
      </div>
    </div>
  );
};

export default FeaturedPosts;
