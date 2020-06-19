import React, { useState } from "react";

import classes from "./style.module.css";
import Preloader from "./../../Preloader/Preloader";
// import StatusProfile from "./StatusProfile";

import userPhoto from "../../../../assets/images/users.png";
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataForm from "./ProfileData/ProfileDataForm";
// import Contacts from "./ProfileData/Contacts";

const ProfileInfo = (props) => {
  const [toggle, setToggle] = useState(false);

  if (!props.profileData) {
    return <Preloader />;
  }
  const onFileChange = (e) => {
    // e.target.file[0]
    if (e.target.files.length) {
      props.saveImage(e.target.files[0]);
    }
  };

  const handleSubmit = (values) => {
    props.saveProfile(values).then((res) => {
      setToggle(false);
    });
  };

  const handleClick = () => {    
    setToggle(true);
  };

  return (
    <>
      <div className={classes.ProfileInfo}>
        <div className={classes.imageContainer}>
          <img
            src={props.profileData.photos.large || userPhoto}
            alt="estaentumundo"
          />
        </div>
        {props.isOwner && (
          <div>
            <input type="file" onChange={onFileChange} />
          </div>
        )}
        {/* onSubmit={handleSubmit} - must be handleSubmit  */}
        {toggle ? (
          <ProfileDataForm
          toggle={toggle}
          onSubmit={handleSubmit}
          profile={props.profileData}
          initialValues={props.profileData}
          />
        ) : (
          <ProfileData
          toggle={toggle}
          handleClick={handleClick}
          isOwner={props.isOwner}
          status={props.status}
          profile={props.profileData}
          updateStatus={props.updateStatus}
          />
        )}
      </div>
    </>
  );
};

export default ProfileInfo;
