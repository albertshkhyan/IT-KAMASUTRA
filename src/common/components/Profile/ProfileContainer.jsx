import React from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

import { setIsFetching, setUsers } from "../../../redux/userReducer";
import {
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
  componentDidMount() {
    let { userID } = this.props.match.params;
    if (!userID) {
      userID = this.props.userID;
      if (!userID) {
        this.props.history.push("/login");
      }
    }
    this.props.profileThunkCreator(userID);
    this.props.getStatusAsyncActionCreator(userID);
  }

  render() {
    return (
      <Profile
        {...this.props}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userID: getUserId(state),
    isAuth: getIsAuth(state),
    status: getStatus(state),//with reselect
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
    setIsFetching,
    setProfileData,
    updateStatusAAC,
    profileThunkCreator,
    getStatusAsyncActionCreator,
  }),
  withRouter
  // withRedirectAuth
)(ProfileContainer);
