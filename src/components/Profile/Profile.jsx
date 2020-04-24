import React from "react";

import classes from "./style.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostContainer";

const Profile = (props) => {
  console.log("render Profile after change MyPosts 👍👍😎😎");

  return (
    <div className={classes.Profile}>
      <ProfileInfo />
      <MyPostContainer />
    </div>
  );
};
export default Profile;
