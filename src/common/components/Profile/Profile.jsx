import React from "react";

import classes from "./style.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostContainer";
// window.prf = [];

const Profile = (props) => {
  return (
    <div className={classes.Profile}>
      <ProfileInfo
        profileData={props.profileData}
        status={props.status}
        updateStatus={props.updateStatusAAC}
        isOwner = {!props.match.params.userID}
        saveImage = {props.saveImage}
      />
      <MyPostContainer />
    </div>
  );
};
export default Profile;
