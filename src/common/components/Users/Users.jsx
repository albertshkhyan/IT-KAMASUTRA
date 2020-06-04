import { NavLink } from "react-router-dom";
import React from "react";
import classes from "./style.module.css";
import userPhoto from "../../../assets/images/users.png";

const Pagination = (props) => {
  let limit = props.pageSize;
  let totalPages = Math.round(props.totalCount / limit);
  let pageLimitArray = [];
  for (let i = 1; i <= totalPages; ++i) {
    pageLimitArray.push(i);
  }
  return (
    <div className="flexible jCenter">
      <div className={`${classes.paginationContainer} flexible`}>
        <div className={classes.paginContent}>
          {pageLimitArray.map((item) => {
            return (
              <span
                key={item}
                className={props.currentPage === item ? classes.active : ""}
                onClick={() => props.onActiveClick(item)}
              >
                &nbsp;&nbsp;
                {item}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const UserItem = (props) => {
  return (
    <>
      {props.users &&
        props.users.map((item) => {
          return (
            <div key={item.id} className={classes.userContaienr}>
              <NavLink to={`/profile/${item.id}`}>
                <div className={classes.avatar}>
                  <img
                    src={item.photos.small ? item.photos.small : userPhoto}
                    alt={item.description}
                  />
                </div>
              </NavLink>

              <div className="name">
                <span>{item.name}</span>
              </div>

              <div className={classes.message}>
                <span>{item.description}</span>
              </div>

              <div className={classes.btnContainer}>
                {item.followed ? (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === item.id
                    )}
                    className={`${classes.btn} ${classes.unfollow} `}
                    onClick={() => {
                      props.unfollowAsyncAC(item);
                    }}
                  >
                    UNFOLLOW
                  </button>
                ) : (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === item.id
                    )}
                    className={`${classes.btn} ${classes.follow}`}
                    onClick={() => {
                      props.followAsyncAC(item);
                    }}
                  >
                    FOLLOW
                  </button>
                )}
              </div>
            </div>
          );
        })}
    </>
  );
};

const Users = (props) => {
  return (
    <div className="Users">
      <Pagination
        pageSize={props.pageSize}
        totalCount={props.totalCount}
        currentPage={props.currentPage}
        onActiveClick={props.onActiveClick}
      />
      <UserItem
        users={props.users}
        follow={props.follow}
        unfollow={props.unfollow}
        followAsyncAC={props.followAsyncAC}
        unfollowAsyncAC={props.unfollowAsyncAC}
        followingInProgress={props.followingInProgress}
        toggleFollowingInProgress={props.toggleFollowingInProgress}
      />
      <div className={`${classes.btnShowMoreContaoner}  flexible jCenter`}>
        <button>SHOW MORE</button>
      </div>
    </div>
  );
};

export default Users;
