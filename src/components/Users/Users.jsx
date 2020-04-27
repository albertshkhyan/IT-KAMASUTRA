import React from "react";

import * as axios from "axios";

import userPhoto from '../../assets/images/users.png';

import classes from "./style.module.css";


class Users extends React.Component {
  componentDidMount() {
    axios
    .get("https://social-network.samuraijs.com/api/1.0/users")
    .then( (response) =>  this.props.setUsers(response.data.items) );
  }

  render(){
    return (
      <div className="Users">
      {this.props.users.map((item) => {
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
                <button onClick={() => this.props.follow(item.id)}>FOLLOW</button>
              ) : (
                <button onClick={() => this.props.unfollow(item.id)}>
                  UNFOLLOW
                </button>
              )}
            </div>
          </div>
        );
      })}
      <div className={`${classes.btnShowMoreContaoner}  flexible jCenter`}>
        <button onClick={this.getUsers}>SHOW MORE</button>
      </div>
    </div>
    )
  }
}

export default Users;
