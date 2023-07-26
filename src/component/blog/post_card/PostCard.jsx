import Image from "next/image";
import React from "react";
import styled from "../../../app/blog/[pageid]/posts.module.css";
import Link from "next/link";
import { formattedDate } from "@/lib/utils/utils";

const PostCard = ({ post }) => {
  // framer motion cards comes from bottom
  const { title, slug, readtime, date, author, image } = post?.fields;

  return (
    <div className={styled.postcard}>
      <div className={styled.postcard_image}>
        <Image
          src={`https:${image.fields.file.url}`}
          alt={image.fields.file.title}
          fill
        ></Image>
      </div>
      <div className={styled.postcard_details}>
        <p className={styled.readtime}>{readtime} min to read</p>
        <p className={styled.postcard_title}>
          <Link href={`/blog/posts/${slug}`}>{title}</Link>
        </p>
        <p className={styled.date}>{formattedDate(date)}</p>
      </div>
    </div>
  );
};

export default PostCard;
