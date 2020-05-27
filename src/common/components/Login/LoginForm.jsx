import React from "react";
import { reduxForm, Field } from "redux-form";
import Input from "./../../FormControl/Input/Inpuit";
import { required, minLengthPassowrd, email } from "./../../../utils/validators";
import styles from "../../FormControl/style.module.css";

const minLengthPassw = minLengthPassowrd(8);
const LoginForm = (props) => {
  return (
    <>
      <h2>Login</h2>
      <div className="LoginForm">
        <form onSubmit={props.handleSubmit}>
          <div>
            <Field
              placeholder="Email"
              component={Input}
              validate={[required, email]}
              type="text"
              name="email"
            />
          </div>
          <div>
            <Field
              placeholder="Password"
              component={Input}
              validate={[required, minLengthPassw]}
              type="password"
              name="password"
            />
          </div>
          <div className="flexible">
            <Field
              component={Input}
              validate={[required]}
              type="checkbox"
              name="rememberMe"
              id="rem"
            />
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
