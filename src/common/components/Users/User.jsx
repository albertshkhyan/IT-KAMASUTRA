import React from "react";

import classes from "./style.module.css";
import { NavLink } from "react-router-dom";
import userPhoto from "../../../assets/images/users.png";

const User = (props) => {
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

export default User;
