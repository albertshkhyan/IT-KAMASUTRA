import React from "react";
import { createField } from "../../../../FormControl/FormControl";
import Textarea from "../../../../FormControl/Textarea/Textarea";
import { reduxForm } from "redux-form";
import Input from "./../../../../FormControl/Input/Inpuit";
import Contacts from "./Contacts";
import classes from "./style.module.css";

const ProfileDataForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <button className={`${!props.toggle ? classes.active : ""}`}>
          Save
        </button>
      </div>
      <div>
        <b>Full name:</b>
        <div>
          {createField(Input, [], "text", "fullName", "Enter full namme")}
        </div>
        <div>
          <b>Looking for a job: </b>
          {createField(Input, [], "checkbox", "lookingForAJob", null)}
        </div>
        <div>
          <b>My Profesional skills:</b>
          {createField(
            Textarea,
            [],
            null,
            "lookingForAJobDescription",
            "My profesional skills"
          )}
        </div>
        <div>
          <b>About me:</b>
          {createField(Textarea, [], null, "aboutMe", "About me")}
        </div>

        <div>
          <Contacts toggle={props.toggle} profile={props.profile} />
        </div>

        {props.error && (
          <div className="commonErrorContainer">{props.error}</div>
        )}
      </div>
    </form>
  );
};

export default reduxForm({ form: "profileDataForm" })(ProfileDataForm);
