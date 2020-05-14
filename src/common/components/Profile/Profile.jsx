import React from "react";

import classes from "./style.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostContainer";
import { Redirect } from 'react-router-dom';

const Profile = (props) => {
  //// FIXME - not correct, because Redirect is side-effect case
  if (!props.isAuth) {
    return <Redirect to="/login" />;
  }
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
