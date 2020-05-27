import Header from "./Header";
import React from "react";
import { connect } from "react-redux";
import {
  setUserData,
  authMeThunkCreator,
  logoutThunkCreator,
} from "../../../redux/authReducer";
import { Redirect } from "react-router-dom";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authMeThunkCreator(true);
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  id: state.auth.id,
  login: state.auth.login,
  email: state.auth.email,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {
  setUserData,
  authMeThunkCreator,
  logoutThunkCreator,
})(HeaderContainer);
