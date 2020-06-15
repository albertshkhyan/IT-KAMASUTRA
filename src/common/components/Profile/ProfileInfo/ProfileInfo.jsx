import React from "react";

import classes from "./style.module.css";
import Preloader from "./../../Preloader/Preloader";
// import StatusProfile from "./StatusProfile";
import StatusProfileWithHooks from "./StatusProfileWithHooks";

import userPhoto from "../../../../assets/images/users.png";


const ProfileInfo = (props) => {
  if (!props.profileData) {
    return <Preloader />;
  }
  return (
    <>
      <div className={classes.ProfileInfo}>
        <div className={classes.imageContainer}>
          <img src={props.profileData.photos.large || userPhoto} alt="estaentumundo" />
        </div>
        <div className={classes.avatarDescription}>
          <StatusProfileWithHooks
            status={props.status}
            updateStatus={props.updateStatus}
          />
          <div>
            <h3>{props.profileData.fullName}</h3>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProfileInfo;
