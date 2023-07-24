import React from "react";
import styled from "../styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { FetchFeaturedfirstPost } from "@/lib/utils/utils";

const FeaturedFirstPost = async () => {
  const FeaturedfirstPost = await FetchFeaturedfirstPost();

  const { title, slug, readtime, date, author, image } =
    FeaturedfirstPost?.items?.[0]?.fields;
  console.log(author);

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
          <p className={styled.profile_name}>{author.fields.title}</p>
          {/* format data */}
          <p className={styled.publish_date}>{date}</p>
        </div>
      </div>
    </>
  );
};

export default FeaturedFirstPost;
