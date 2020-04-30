import { connect } from "react-redux";

import React from "react";

import * as axios from "axios";

import Users from "./Users";
import Preloader from "./../Preloader/Preloader";
import {
  follow,
  unfollow,
  setUsers,
  setTotalCount,
  setIsFetching,
  setCurrentPage,
} from "../../../redux/userPageReducer";

class UserContainer extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
      });
  }

  onActiveClick = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    this.props.setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
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
})(UserContainer);
