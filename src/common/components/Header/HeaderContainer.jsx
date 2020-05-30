import Header from "./Header";
import React from "react";
import { connect } from "react-redux";
import { logoutThunkCreator } from "../../../redux/authReducer";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  userName: state.auth.userName,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {
  logoutThunkCreator,
})(HeaderContainer);
