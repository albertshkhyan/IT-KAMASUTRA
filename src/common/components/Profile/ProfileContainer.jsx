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
import {
  getUsers,
  getUserId,
  getIsAuth,
  getStatus,
  getProfileData,
  getIsFetching,
} from "./../../../redux/userSelectors";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let { userID } = this.props.match.params;
    if (!userID) {
      userID = this.props.userID;
      if (!userID) {
        /**
         * push(path, state)
         * we can do redirect without Redirect component, like this
         */

        this.props.history.push("/login");
      }
    }
    this.props.profileThunkCreator(userID);
    this.props.getStatusAsyncActionCreator(userID);
  }

  render() {
    // console.log('RENDER - PROFILE_CONTAINER 👽');
    return (
      <Profile
        {...this.props}
      />
    );
  }
}

const mapStateToProps = (state) => {
  // console.log('mapStateToProps 🙋‍♀️');
  return {
    // userID: getUserId(state),
    // isAuth: getIsAuth(state),
    // status: getStatus(state),
    // profileData: getProfileData(state),
    //////////
    userID: state.auth.id, //
    isAuth: state.auth.isAuth, //
    status: state.profile.status, //
    profileData: state.profile.profileData, //
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
