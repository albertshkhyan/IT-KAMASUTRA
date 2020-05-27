import React from "react";
import { reduxForm, Field } from "redux-form";
import Input from "./../../FormControl/Input/Inpuit";
import { required } from "./../../../utils/validators";

const LoginForm = (props) => {
  return (
    <>
      <h2>Login</h2>
      <div className="LoginForm">
        {/* <form onSubmit={props.handleSubmit(props.on_submit)}> */}
        <form onSubmit={props.handleSubmit}>
          {" "}
          {/* <form onSubmit={props.handleSubmit(props.onSubmit)}> */}
          <div>
            <Field
              placeholder="Email"
              component={Input}
              validate={[required]}
              type="text"
              name="email"
            />
          </div>
          <div>
            <Field
              placeholder="Password"
              component={Input}
              validate={[required]}
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
          {/* button in form do auto submit */}
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};
const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

export default LoginReduxForm;
