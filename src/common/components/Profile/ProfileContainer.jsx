import { setIsFetching, setUsers } from "../../../redux/userPageReducer";
import {
  setProfileData,
  profileThunkCreator,
} from "./../../../redux/profilePageReducer";

import Profile from "./Profile";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import withRedirectAuth from "../../../hoc/withRedirectAuth";
import { compose } from "redux";

class ProfileContainer extends React.Component {

  componentDidMount() {
    let { userID } = this.props.match.params;
    this.props.profileThunkCreator(userID);
  }

  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.usersPage.isFetching,
    profileData: state.profilePage.profileData,
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
    profileThunkCreator,
  }),
  withRouter,
  withRedirectAuth
)(ProfileContainer);
