import React from "react";

import userPhoto from "../../../assets/images/users.png";

import classes from "./style.module.css";
import { NavLink } from "react-router-dom";
import * as axios from "axios";

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
                    className={`${classes.btn} ${classes.unfollow}`}
                    onClick={() => {
                      axios
                        .delete(
                          `https://social-network.samuraijs.com/api/1.0/follow/${item.id}`,
                          {
                            withCredentials: true,
                            headers: {
                              "API-KEY": "ae0b838f-0cd8-441f-a726-63236295e269",
                            },
                          }
                        )
                        .then((response) => {
                          console.log("response UNFOLLOW", response);
                          if (response.data.resultCode === 0) {
                            props.unfollow(item.id);
                          }
                        });
                    }}
                  >
                    UNFOLLOW
                  </button>
                ) : (
                  <button
                    className={`${classes.btn} ${classes.follow}`}
                    onClick={() => {
                      axios
                        .post(
                          `https://social-network.samuraijs.com/api/1.0/follow/${item.id}`,
                          {},
                          {
                            withCredentials: true,
                            headers: {
                              "API-KEY": "ae0b838f-0cd8-441f-a726-63236295e269",
                            },
                          }
                        )
                        .then((response) => {
                          if (response.data.resultCode === 0) {
                            props.follow(item.id);
                          }
                        });
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
        follow={props.follow}
        unfollow={props.unfollow}
        users={props.users}
      />
      <div className={`${classes.btnShowMoreContaoner}  flexible jCenter`}>
        <button>SHOW MORE</button>
      </div>
    </div>
  );
};

export default Users;
