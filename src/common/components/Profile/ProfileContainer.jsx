import React from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

import { setIsFetching, setUsers } from "../../../redux/userPageReducer";
import {
  setProfileData,
  updateStatusAAC,
  profileThunkCreator,
  getStatusAsyncActionCreator,
} from "./../../../redux/profilePageReducer";

import Profile from "./Profile";

// import withRedirectAuth from "../../../hoc/withRedirectAuth";

class ProfileContainer extends React.Component {
  componentDidMount() {
    debugger
    let { userID } = this.props.match.params;
    if (!userID) userID = this.props.userID;
    this.props.profileThunkCreator(userID);
    this.props.getStatusAsyncActionCreator(userID);
  }

  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  debugger
  return {
    userID:state.auth.id,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status,
    isFetching: state.usersPage.isFetching,
    profileData: state.profilePage.profileData,
    // userID: state
  };
};

export default compose(
  connect(mapStateToProps, {
    setUsers,
    setIsFetching,
    setProfileData,
    updateStatusAAC,
    profileThunkCreator,
    getStatusAsyncActionCreator,
  }),
  withRouter
  // withRedirectAuth
)(ProfileContainer);
