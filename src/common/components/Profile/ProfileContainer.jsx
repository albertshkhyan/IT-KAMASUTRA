import { setIsFetching, setUsers } from "../../../redux/userPageReducer";

import APIRequests from "./../../../api/api";
import Profile from "./Profile";
import React from "react";
import { connect } from "react-redux";
import { setProfileData } from "./../../../redux/profilePageReducer";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let { userID } = this.props.match.params;
    APIRequests.profile(userID).then((data) => {
      this.props.setProfileData(data);
    });
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

////variant 1
// const GetURLContainer = withRouter(ProfileContainer);
// export default connect(mapStateToProps, {
//   setIsFetching,
//   setUsers,
//   setProfileData,
// })(GetURLContainer);

////variant 2
export default connect(mapStateToProps, {
  setIsFetching,
  setUsers,
  setProfileData,
})(withRouter(ProfileContainer));
