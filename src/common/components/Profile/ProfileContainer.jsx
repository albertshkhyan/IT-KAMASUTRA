import React from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

import { setIsFetching, setUsers } from "../../../redux/userReducer";
import {
  saveImage,
  setProfileData,
  updateStatusAAC,
  profileThunkCreator,
  getStatusAsyncActionCreator,
} from "../../../redux/profileReducer";

import Profile from "./Profile";

// import withRedirectAuth from "../../../hoc/withRedirectAuth";
import {
  getUsers,
  getUserId,
  getIsAuth,
  getStatus,
  getProfileData,
} from "./../../../redux/userSelectors";

class ProfileContainer extends React.Component {
  updataeProfil = () => {
    let { userID } = this.props.match.params; //take ID of another user
    if (!userID) {
      userID = this.props.userID;
      if (!userID) {
        this.props.history.push("/login");//redirect when logout
      }
    }
    this.props.profileThunkCreator(userID);
    this.props.getStatusAsyncActionCreator(userID);
  };
  componentDidMount() {
    this.updataeProfil();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.match.params.userID !== this.props.match.params.userID ||
      prevProps.userID !== this.props.userID
    ) {
      this.updataeProfil();
    }
  }

  render() {
    console.log("this.props", this.props);

    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    userID: getUserId(state),
    isAuth: getIsAuth(state),
    status: getStatus(state), //with reselect
    profileData: getProfileData(state),
    //////////
    // userID: state.auth.id,
    // isAuth: state.auth.isAuth,
    // status: state.profile.status,
    // profileData: state.profile.profileData,
  };
};

export default compose(
  connect(mapStateToProps, {
    getUsers,
    setUsers,
    saveImage,
    setIsFetching,
    setProfileData,
    updateStatusAAC,
    profileThunkCreator,
    getStatusAsyncActionCreator,
  }),
  withRouter
  // withRedirectAuth
)(ProfileContainer);
