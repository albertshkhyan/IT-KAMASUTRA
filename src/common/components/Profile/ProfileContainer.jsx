import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import { connect } from "react-redux";
import { setIsFetching, setUsers } from "../../../redux/userPageReducer";
import { setProfileData } from "./../../../redux/profilePageReducer";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    const { userID } = this.props.match.params;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
      .then((response) => {
        this.props.setProfileData(response.data);
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
