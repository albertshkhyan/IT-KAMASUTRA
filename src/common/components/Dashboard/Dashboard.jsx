import React from 'react';

import classes from './style.module.css';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className={classes.Dashboard}>
            <aside>
                <nav>
                    <ul>
                        <li className={classes.item}>
                            <NavLink activeClassName={classes.activeLink}  to="/profile">
                                Profile
                            </NavLink>
                        </li> 
                        <li className={classes.item}>
                            <NavLink activeClassName={classes.activeLink}  to="/login">
                                Login
                            </NavLink>
                        </li> 
                        <li className={classes.item} >
                            <NavLink activeClassName={classes.activeLink}  to="/dialogs">
                                Messages
                            </NavLink>
                        </li>
                        <li className={classes.item}>
                            <NavLink activeClassName={classes.activeLink}  to="/news">
                                News
                            </NavLink>
                        </li>
                        <li className={classes.item}>
                            <NavLink activeClassName={classes.activeLink}  to="/music">
                                Music
                            </NavLink>
                        </li>
                        <li className={classes.item}>
                            <NavLink activeClassName={classes.activeLink}  to="/settings">
                                Settings
                            </NavLink>
                        </li>
                        <li className={classes.item}>
                            <NavLink activeClassName={classes.activeLink}  to="/users">
                                Users
                            </NavLink>
                        </li>

                    </ul>
                </nav>
            </aside>
        </div>
    );
}
export default Dashboard;