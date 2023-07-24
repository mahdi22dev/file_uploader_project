import React from "react";

const Profile = ({ src }) => {
  return (
    <div className={styled.profile}>
      <div className={styled.profile_image}>
        <Image src={scr} fill></Image>
      </div>
      <div className={styled.profile_info}>
        <p className={styled.profile_name}>mahdi idrissi</p>
        <p className={styled.publish_date}>23/7/2023</p>
      </div>
    </div>
  );
};

export default Profile;
