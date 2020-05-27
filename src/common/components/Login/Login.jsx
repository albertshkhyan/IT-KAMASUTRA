import React from "react";
import LoginReduxForm from "./LoginForm";
import { connect } from "react-redux";
import { loginThunkCreator } from "../../../redux/authReducer";
import { Redirect } from "react-router-dom";

const Login = (props) => {
  const submit = (values) => {
    //pass values from store.getState().form
    //NOTE - In here we can call ascyn actions - for validation
    // console.log("some", some);
    let { email, password, rememberMe } = values;
    debugger
    props.loginThunkCreator(email, password, rememberMe);
  };
  if (props.isAuth) {
    return <Redirect to="/profile" />;
  }
  return (
    <div className="Login">
      {/* we must pass onSubmit props for work */}
      {/* <LoginReduxForm on_submit={submit} /> */}
      <LoginReduxForm onSubmit={submit} />
    </div>
  );
};
const mapStateToProps = (state) => ({ isAuth: state.auth.isAuth });

export default connect(mapStateToProps, { loginThunkCreator })(Login);
