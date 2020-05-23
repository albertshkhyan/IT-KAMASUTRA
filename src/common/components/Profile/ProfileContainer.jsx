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
    let { userID } = this.props.match.params;
    if (!userID) userID = 7837;
    this.props.profileThunkCreator(userID);
    this.props.getStatusAsyncActionCreator(userID);
  }

  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.usersPage.isFetching,
    profileData: state.profilePage.profileData,
    status: state.profilePage.status,
  };
};

// const AuthRedirectContainer = withRedirectAuth(ProfileContainer);

// export default connect(mapStateToProps, {
//   setUsers,
//   setIsFetching,
//   setProfileData,
//   profileThunkCreator,
// })(withRouter(AuthRedirectContainer));

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
