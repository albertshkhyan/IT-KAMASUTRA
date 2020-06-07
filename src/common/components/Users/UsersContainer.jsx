import {
  follow,
  unfollow,
  followAsyncAC,
  setCurrentPage,
  unfollowAsyncAC,
  getUsersAsncAC,
  toggleFollowingInProgress,
} from "../../../redux/userReducer";

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
    const {
      users,
      follow,
      pageSize,
      unfollow,
      totalCount,
      isFetching,
      currentPage,
      followAsyncAC,
      unfollowAsyncAC,
      followingInProgress,
      toggleFollowingInProgress,
    } = this.props;
    return (
      <>
        {isFetching ? <Preloader /> : null}

        <Users
          users={users}
          follow={follow}
          pageSize={pageSize}
          unfollow={unfollow}
          totalCount={totalCount}
          onActiveClick={this.onActiveClick}
          currentPage={currentPage}
          followAsyncAC={followAsyncAC}
          unfollowAsyncAC={unfollowAsyncAC}
          followingInProgress={followingInProgress}
          toggleFollowingInProgress={toggleFollowingInProgress}
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
