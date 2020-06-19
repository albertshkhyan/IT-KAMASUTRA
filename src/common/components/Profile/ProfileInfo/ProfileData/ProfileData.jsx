import React from "react";
import StatusProfileWithHooks from "./../StatusProfileWithHooks";
import Contacts from "./Contacts";

const ProfileData = ({
  status,
  toggle,
  profile,
  isOwner,
  handleClick,
  updateStatus,
}) => {
  return (
    <>
      {isOwner && (
        <div>
          <button onClick={handleClick}>Edit</button>
        </div>
      )}

      <div>
        <span>{profile.fullName}</span>
      </div>
      <StatusProfileWithHooks status={status} updateStatus={updateStatus} />
      <div>
        <b>Looking a job: </b>{" "}
        <span>{profile.lookingForAJob ? "Yes" : "No"}</span>
      </div>

      <div>
        <b>My professional skills: </b>
        <span>{profile.lookingForAJobDescription}</span>
      </div>

      <div>
        <b>About me:</b>
        <span>{profile.aboutMe}</span>
      </div>
      <div>
        <Contacts profile={profile} toggle={toggle} />
      </div>
    </>
  );
};

export default ProfileData;
