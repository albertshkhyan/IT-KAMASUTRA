import {
  follow,
  unfollow,
  followAsyncAC,
  setCurrentPage,
  unfollowAsyncAC,
  getUsersAsncAC,
  toggleFollowingInProgress,
} from "../../../redux/userPageReducer";

import Preloader from "./../Preloader/Preloader";
import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  getUsers,
  getPageSize,
  getIsFetching,
  getTotalCount,
  getCurrentPage,
  getFollowingInProgress,
} from "./../../../redux/userSelectors";

// window.usrc = [];

class UserContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersAsncAC(this.props.currentPage, this.props.pageSize);
  }

  onActiveClick = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    this.props.getUsersAsncAC(currentPage, this.props.pageSize);
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
          onActiveClick={this.onActiveClick}
          currentPage={this.props.currentPage}
          followAsyncAC={this.props.followAsyncAC}
          unfollowAsyncAC={this.props.unfollowAsyncAC}
          followingInProgress={this.props.followingInProgress}
          toggleFollowingInProgress={this.props.toggleFollowingInProgress}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    totalCount: getTotalCount(state),
    currentPage: getCurrentPage(state),
    pageSize: getPageSize(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
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
  setCurrentPage,
  getUsersAsncAC,
  toggleFollowingInProgress,
  followAsyncAC,
  unfollowAsyncAC,
})(UserContainer);
