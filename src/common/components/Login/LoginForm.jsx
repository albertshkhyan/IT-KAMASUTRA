import React from "react";
import { reduxForm } from "redux-form";
import Input from "./../../FormControl/Input/Inpuit";
import {
  required,
  minLengthPassowrd,
  email,
} from "./../../../utils/validators";
import styles from "../../FormControl/style.module.css";
import { createField } from "./../../FormControl/FormControl";

const minLengthPassw = minLengthPassowrd(8);
const LoginForm = (props) => {
  return (
    <>
      <h2>Login</h2>
      <div className="LoginForm">
        <form onSubmit={props.handleSubmit}>
          <div>
            {createField(Input, [required, email], "text", "email", "Email")}
          </div>
          <div>
            {createField(
              Input,
              [required, minLengthPassw],
              "password",
              "password",
              "Password"
            )}
          </div>
          <div className="flexible horizontal">
            {createField(
              Input,
              [],
              "checkbox",
              "rememberMe",
              "Password",
              "rem"
            )}
            <label htmlFor="rem">Remember</label>
          </div>
          <button>Submit</button>
        </form>
      </div>

      {props.error && (
        <div className={styles.commonErrorContainer}>{props.error}</div>
      )}
    </>
  );
};
const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

export default LoginReduxForm;
