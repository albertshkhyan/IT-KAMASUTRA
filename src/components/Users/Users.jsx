import React from "react";

import * as axios from "axios";

import userPhoto from "../../assets/images/users.png";

import classes from "./style.module.css";
import { setTotalCountAC, setCurrentPageAC } from "../../redux/userPageReducer";

// const Pagination = (props) => {};

class Users extends React.Component {
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

  onRightHandle = () => {};
  render() {
    let limit = this.props.pageSize;
    let totalPages = Math.round(this.props.totalCount / limit);
    let visiblePage = Math.round(this.props.totalCount / totalPages);
    console.log("visiblePage", visiblePage);
    let pageLimitArray = [];
    for (let i = 1; i <= visiblePage; ++i) {
      pageLimitArray.push(i);
    }

    return (
      <div className="Users">
        <div className={classes.paginationContainer}>
          <div className={classes.paginContent}>
            <button> &lt;&lt; </button>
            {pageLimitArray.map((item) => {
              return (
                <span
                  key={item}
                  className={
                    this.props.currentPage === item ? classes.active : ""
                  }
                  onClick={() => this.onActiveClick(item)}
                >
                  &nbsp;&nbsp;
                  {item}
                </span>
              );
            })}
            <button onClick={this.onRightHandle}> &gt;&gt; </button>
          </div>
        </div>
        {this.props.users.map((item) => {
          return (
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
                  <button onClick={() => this.props.follow(item.id)}>
                    FOLLOW
                  </button>
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
    );
  }
}

export default Users;
