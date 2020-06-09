import React from "react";

import classes from "./style.module.css";
import Pagination from './../../Pagination/Pagination';
import User from './User';

const Users = ({
  users,
  follow,
  unfollow,
  pageSize,
  totalCount,
  currentPage,
  followAsyncAC,
  onActiveClick,
  unfollowAsyncAC,
  followingInProgress,
  toggleFollowingInProgress,
}) => {
  return (
    <div className="Users">
      <Pagination
        pageSize={pageSize}
        totalCount={totalCount}
        currentPage={currentPage}
        onActiveClick={onActiveClick}
      />
      <User
        users={users}
        follow={follow}
        unfollow={unfollow}
        followAsyncAC={followAsyncAC}
        unfollowAsyncAC={unfollowAsyncAC}
        followingInProgress={followingInProgress}
        toggleFollowingInProgress={toggleFollowingInProgress}
      />
      <div className={`${classes.btnShowMoreContaoner}  flexible jCenter`}>
        <button>SHOW MORE</button>
      </div>
    </div>
  );
};

export default Users;
