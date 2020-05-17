import React from "react";

import classes from "./style.module.css";
import Preloader from "./../../Preloader/Preloader";
import StatusProfile from "./StatusProfile";

const ProfileInfo = (props) => {
  return (
    <>
      {props.profileData ? (
        <div className={classes.ProfileInfo}>
          <div>
            <img src={props.profileData.photos.large} alt="estaentumundo" />
          </div>
          <div className={classes.avatarDescription}>
            {" "}
            <StatusProfile status="Some status" />
            <div>
              <span>{props.profileData.fullName}</span>
            </div>
          </div>
        </div>
      ) : (
        <Preloader />
      )}
    </>
  );
};
export default ProfileInfo;
