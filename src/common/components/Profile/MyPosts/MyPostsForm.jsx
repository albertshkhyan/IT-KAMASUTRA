import React from "react";

import { required, maxLength } from "./../../../../utils/validators";
import { Field } from "redux-form";
import Textarea from "./../../../FormControl/Textarea/Textarea";
import { reduxForm } from "redux-form";

const maxLengthValidator = maxLength(10);

const MyPostsForm = (props) => {
  debugger;
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="myPostTextarea"
          component={Textarea}
          placeholder="Your News"
          validate={[required, maxLengthValidator]}
        />
      </div>
      <div>
        <button>Add Post</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "myPostContainer",
})(MyPostsForm);
