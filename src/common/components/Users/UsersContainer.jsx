import {
  follow,
  setUsers,
  unfollow,
  setIsFetching,
  setTotalCount,
  setCurrentPage,
  toggleFollowingInProgress,
} from "../../../redux/userPageReducer";

import APIRequests from "../../../api/api";
import Preloader from "./../Preloader/Preloader";
import React from "react";
import Users from "./Users";
import { connect } from "react-redux";

class UserContainer extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);

    APIRequests.getUsers(this.props.currentPage, this.props.pageSize).then(
      (data) => {
        this.props.setIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalCount(data.totalCount);
      }
    );
  }

  onActiveClick = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    this.props.setIsFetching(true);
    APIRequests.getUsers(currentPage, this.props.pageSize).then((data) => {
      this.props.setIsFetching(false);
      this.props.setUsers(data.items);
      this.props.setTotalCount(data.totalCount);
    });
  };

  render() {
    return (
      <>
        {/* {this.props.isFetching && <Preloader />} */}
        {this.props.isFetching ? <Preloader /> : null}

        <Users
          users={this.props.users}
          follow={this.props.follow}
          pageSize={this.props.pageSize}
          unfollow={this.props.unfollow}
          totalCount={this.props.totalCount}
          currentPage={this.props.currentPage}
          onActiveClick={this.onActiveClick}
          toggleFollowingInProgress = {this.props.toggleFollowingInProgress}
          followingInProgress = {this.props.followingInProgress}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    users: state.usersPage.users,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
    isFetching: state.usersPage.isFetching,
    followingInProgress : state.usersPage.followingInProgress
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (id) => dispatch(followAC(id)),
//     unfollow: (id) => dispatch(unfollowAC(id)),
//     setUsers: (users) => dispatch(setUsersAC(users)),
//     setTotalCount: (totalCount) => dispatch(setTotalCountAC(totalCount)),
//     setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
//     setIsFetching : (isFetching) => dispatch(setIsFetchingAC(isFetching))
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setTotalCount,
  setCurrentPage,
  setIsFetching,
  toggleFollowingInProgress,  
})(UserContainer);
