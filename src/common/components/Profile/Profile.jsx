import React from "react";

import classes from "./style.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostContainer";

const Profile = (props) => {
  debugger
  return (
    <div className={classes.Profile}>
      <ProfileInfo
        profileData={props.profileData}
        isFetching={props.isFetching}
      />
      <MyPostContainer />
    </div>
  );
};
export default Profile;
