import { setIsFetching, setUsers } from "../../../redux/userPageReducer";
import {
  setProfileData,
  profileThunkCreator,
} from "./../../../redux/profilePageReducer";

import Profile from "./Profile";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let { userID } = this.props.match.params;
    this.props.profileThunkCreator(userID);

    // APIRequests.profile(userID).then((data) => {
    //   this.props.setProfileData(data);
    // });
  }

  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.usersPage.isFetching,
    profileData: state.profilePage.profileData,
    isAuth: state.auth.isAuth,
  };
};

////variant 1
// const GetURLContainer = withRouter(ProfileContainer);
// export default connect(mapStateToProps, {
//   setIsFetching,
//   setUsers,
//   setProfileData,
// })(GetURLContainer);

////variant 2
export default connect(mapStateToProps, {
  setUsers,
  setIsFetching,
  setProfileData,
  profileThunkCreator,
})(withRouter(ProfileContainer));
