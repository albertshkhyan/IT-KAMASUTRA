import React from "react";

import classes from "./style.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostContainer";

const Profile = (props) => {
  return (
    <div className={classes.Profile}>
      <ProfileInfo
        profileData={props.profileData}
        isFetching={props.isFetching}
        status={props.status}
        updateStatus={props.updateStatusAAC}
      />
      <MyPostContainer />
    </div>
  );
};
export default Profile;
