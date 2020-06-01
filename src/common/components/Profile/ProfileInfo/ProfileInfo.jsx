import React from "react";

import classes from "./style.module.css";
import Preloader from "./../../Preloader/Preloader";
// import StatusProfile from "./StatusProfile";
import StatusProfileWithHooks from "../StatusProfileWithHooks";

const ProfileInfo = (props) => {
  if (!props.profileData) {
    return <Preloader />;
  }
  return (
    <>
      <div className={classes.ProfileInfo}>
        <div>
          <img src={props.profileData.photos.large} alt="estaentumundo" />
        </div>
        <div className={classes.avatarDescription}>
          {" "}
          <StatusProfileWithHooks
            status={props.status}
            updateStatus={props.updateStatus}
          />
          {/* <StatusProfile
            status={props.status}
            updateStatus={props.updateStatus}
          /> */}
          <div>
            <h3>{props.profileData.fullName}</h3>
          </div>
        </div>
      </div>

      {/* {props.profileData ? (
        <div className={classes.ProfileInfo}>
          <div>
            <img src={props.profileData.photos.large} alt="estaentumundo" />
          </div>
          <div className={classes.avatarDescription}>
            {" "}
            <StatusProfile
              status={props.status}
              updateStatus={props.updateStatus}
            />
            <div>
              <h3>{props.profileData.fullName}</h3>
            </div>
          </div>
        </div>
      ) : (
        <Preloader />
      )} */}
    </>
  );
};
export default ProfileInfo;
