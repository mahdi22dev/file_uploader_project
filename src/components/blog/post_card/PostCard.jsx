"use client";
import Image from "next/image";
import React from "react";
import styled from "../../../app/blog/[pageid]/posts.module.css";
import Link from "next/link";
import { formattedDate } from "@/lib/utils/utils";
import { motion } from "framer-motion";

const PostCard = ({ post }) => {
  // framer motion cards comes from bottom
  const { title, slug, readtime, date, author, image } = post?.fields;

  return (
    <motion.div
      initial={{ opacity: 0, y: "100px" }}
      whileInView={{
        opacity: 1,
        y: 0,
        ease: "linear",
        transition: {
          type: "spring",
          stiffness: 50,
          y: { duration: 0.5 },
          opacity: { duration: 0.9 },
        },
      }}
      className={styled.postcard}
    >
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
    </motion.div>
  );
};

export default PostCard;
