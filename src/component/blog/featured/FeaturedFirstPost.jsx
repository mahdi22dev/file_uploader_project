import React from "react";
import styled from "../styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { FetchFeaturedfirstPost } from "@/lib/utils/utils";
import Profile from "./Profile";

const FeaturedFirstPost = async () => {
  const FeaturedfirstPost = await FetchFeaturedfirstPost();

  const { title, slug, readtime, date, author, image } =
    FeaturedfirstPost?.items?.[0]?.fields;

  return (
    <>
      <div className={styled.first_featured_post_image}>
        <Image
          src={`https:${image.fields.file.url}`}
          alt={image.fields.file.title}
          fill
        ></Image>
      </div>

      <p className={styled.readtime}>{readtime} min to read</p>
      <Link href={`/blog/posts/${slug}`}>
        <p className={styled.featured_title}>{title}</p>
      </Link>
      <Profile post={FeaturedfirstPost?.items?.[0]} date={date} />
    </>
  );
};

export default FeaturedFirstPost;
