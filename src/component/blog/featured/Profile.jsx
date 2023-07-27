import React from "react";
import styled from "../styles.module.css";
import Image from "next/image";
import { formattedDate } from "@/lib/utils/utils";
const Profile = ({ post, date }) => {
  const { author } = post.fields;
  return (
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
        <p className={styled.publish_date}>{formattedDate(date)}</p>
      </div>
    </div>
  );
};

export default Profile;
