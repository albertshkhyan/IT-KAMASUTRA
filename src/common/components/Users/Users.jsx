import React from "react";

import userPhoto from "../../../assets/images/users.png";

import classes from "./style.module.css";
import { NavLink } from "react-router-dom";

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
            <NavLink to={`/profile/${item.id}`}>
              <div key={item.id} className={classes.userContaienr}>
                <div className={classes.avatar}>
                  <img
                    src={item.photos.small ? item.photos.small : userPhoto}
                    alt={item.description}
                  />
                </div>
                <div className="name">
                  <span>{item.name}</span>
                </div>

                <div className={classes.message}>
                  <span>{item.description}</span>
                </div>

                <div className={classes.btn}>
                  {item.followed ? (
                    <button onClick={() => props.follow(item.id)}>
                      FOLLOW
                    </button>
                  ) : (
                    <button onClick={() => props.unfollow(item.id)}>
                      UNFOLLOW
                    </button>
                  )}
                </div>
              </div>
            </NavLink>
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
      <UserItem users={props.users} />
      <div className={`${classes.btnShowMoreContaoner}  flexible jCenter`}>
        <button>SHOW MORE</button>
      </div>
    </div>
  );
};

export default Users;
