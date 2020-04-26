import React from "react";

import * as axios from "axios";

import userPhoto from '../../assets/images/users.png';

import classes from "./style.module.css";

const Users = (props) => {

  //// FIXME -  this is side effect
  if (props.users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then( (response) =>  props.setUsers(response.data.items) )
  }
  const onShowMore = () => {
    // props.setUsers(null);
  };
  return (
    <div className="Users">
      {props.users.map((item) => {
        console.log("item", item);
        return (
          <div key={item.id} className={classes.userContaienr}>
            <div className={classes.avatar}>
              <img src={item.photos.small ? item.photos.small  : userPhoto} alt={item.description} />
            </div>
              <div className="name">
                <span>{item.name}</span>
              </div>

            <div className={classes.message}>
              <span>{item.description}</span>
            </div>

            <div className={classes.btn}>
              {item.followed ? (
                <button onClick={() => props.follow(item.id)}>FOLLOW</button>
              ) : (
                <button onClick={() => props.unfollow(item.id)}>
                  UNFOLLOW
                </button>
              )}
            </div>
          </div>
        );
      })}
      <div className={`${classes.btnShowMoreContaoner}  flexible jCenter`}>
        <button onClick={onShowMore}>SHOW MORE</button>
      </div>
    </div>
  );
};
export default Users;
