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

class ProfileContainer extends React.Component {
  componentDidMount() {
    let { userID } = this.props.match.params;
    this.props.profileThunkCreator(userID);
  }

  render() {
    //// NOTE - No good -> here we are breaking Single Responsibility, Redirect must be wrapped another contianer component
    // if (!this.props.isAuth) {
    //   return <Redirect to="/login" />;
    // }
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.usersPage.isFetching,
    profileData: state.profilePage.profileData,
  };
};

////NOTE -  create container compoennt for Redirect, and that component wrapped connect for isAuth, FOR SAVE SNGLE RESPONSIBILITY PRINCIP
// const mapStateToPropsForRedirectContainer = (state) => ({
//     isAuth: state.auth.isAuth,
// });
// const RedirectContainer = (props) => {
//   if (!props.isAuth) {
//     return <Redirect to="/login" />;
//   }
//   return <ProfileContainer {...props}/>;
// };
// const AuthRedirectContainer = connect(mapStateToPropsForRedirectContainer, null)(RedirectContainer);
const AuthRedirectContainer = withRedirectAuth(ProfileContainer);

export default connect(mapStateToProps, {
  setUsers,
  setIsFetching,
  setProfileData,
  profileThunkCreator,
})(withRouter(AuthRedirectContainer));
