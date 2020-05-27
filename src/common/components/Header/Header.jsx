import React from "react";

import classes from "./style.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={`${classes.Header} flexible jAround aCenter`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Oikya_Front_Logo.png"
        alt="Oikya_Front_Logo.png"
      />
      <div className={classes.loginCContainer}>
        {props.isAuth ? (
          // <span className={classes.login}>{props.login}</span>
          <button onClick={props.logoutThunkCreator}>Logout</button>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </header>
  );
};
export default Header;
