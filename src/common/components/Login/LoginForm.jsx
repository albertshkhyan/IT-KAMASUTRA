import React from "react";
import { reduxForm, Field } from "redux-form";

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
              placeholder="login"
              component="input"
              type="text"
              name="login"
            />
          </div>
          <div>
            <Field
              placeholder="password"
              component="input"
              type="password"
              name="password"
            />
          </div>
          <div className="flexible">
            <div>
              <Field
                component="input"
                type="checkbox"
                name="checkbox"
                id="rem"
              />
            </div>
            <div>
              <label htmlFor="rem">Remember</label>
            </div>
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
