import Header from "./Header";
import React from "react";
import { connect } from "react-redux";
import {
  setUserData,
  authMeThunkCreator,
  logoutThunkCreator,
} from "../../../redux/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authMeThunkCreator();
  }
  render() {
    debugger
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  id: state.auth.id,
  userName: state.auth.userName,
  email: state.auth.email,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {
  setUserData,
  authMeThunkCreator,
  logoutThunkCreator,
})(HeaderContainer);
