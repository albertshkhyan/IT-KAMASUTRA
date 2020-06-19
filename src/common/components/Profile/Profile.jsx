import React from "react";

import classes from "./style.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostContainer";
// window.prf = [];

const Profile = (props) => {
  return (
    <div className={classes.Profile}>
      <ProfileInfo
        status={props.status}
        saveImage = {props.saveImage}
        profileData={props.profileData}
        updateStatus={props.updateStatusAAC}
        isOwner = {!props.match.params.userID}
        saveProfile={props.saveProfile}
      />
      <MyPostContainer />
    </div>
  );
};
export default Profile;
