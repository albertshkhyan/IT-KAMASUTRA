import React from "react";

import classes from "./style.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  debugger
  return (
    <header className={`${classes.Header} flexible jAround aCenter`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Oikya_Front_Logo.png"
        alt="Oikya_Front_Logo.png"
      />
      <div className={classes.loginCContainer}>
        {props.isAuth ? (
          <div>
            <button onClick={props.logoutThunkCreator}>Logout</button>
            <span className={classes.login}>{props.userName}</span>
          </div>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </header>
  );
};
export default Header;
