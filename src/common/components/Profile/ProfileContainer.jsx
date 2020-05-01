gitimport React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import { connect } from "react-redux";
import { setIsFetching, setUsers } from "../../../redux/userPageReducer";
import { setProfileData } from "./../../../redux/profilePageReducer";

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export default connect(mapStateToProps, {
  setIsFetching,
  setUsers,
  setProfileData,
})(ProfileContainer);
