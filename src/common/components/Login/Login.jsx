import React from "react";
import LoginReduxForm from "./LoginForm";

const Login = (props) => {
  const submit = (some) => {
      //pass values from store.getState().form
      //NOTE - In here we can call ascyn actions - for validation
    console.log("some", some);
  };
  return (
    <div className="Login">
        {/* we must pass onSubmit props for work */}
      {/* <LoginReduxForm on_submit={submit} /> */}
      <LoginReduxForm onSubmit={submit} />
    </div>
  );
};

export default Login;
