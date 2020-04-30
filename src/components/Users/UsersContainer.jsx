import { connect } from "react-redux";

import React from "react";

import * as axios from "axios";

import Users from "./Users";
import {
  followAC,
  unfollowAC,
  setUsersAC,
  setTotalCountAC,
  setCurrentPageAC,
} from "../../redux/userPageReducer";

class UserContainer extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(setTotalCountAC(response.data.totalCount));
      });
  }

  onActiveClick = (curentPage) => {
    this.props.setCurrentPage(setCurrentPageAC(curentPage));
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${curentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(setTotalCountAC(response.data.totalCount));
      });
  };

  render() {
    return (
      <Users
        users={this.props.users}
        follow={this.props.follow}
        pageSize={this.props.pageSize}
        unfollow={this.props.unfollow}
        totalCount={this.props.totalCount}
        currentPage={this.props.currentPage}
        onActiveClick={this.onActiveClick}
      />
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (id) => dispatch(followAC(id)),
    unfollow: (id) => dispatch(unfollowAC(id)),
    setUsers: (users) => dispatch(setUsersAC(users)),
    setTotalCount: (totalCount) => dispatch(totalCount),
    setCurrentPage: (currentPage) => dispatch(currentPage),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
