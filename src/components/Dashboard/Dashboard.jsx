import React from 'react';

import classes from './style.module.css';

const Dashboard = () => {
    return (
        <div className={classes.Dashboard}>
            <aside>
                <nav>
                    <ul>
                        <li className={classes.item}>
                            <a  href="/profile">
                                Profile
                            </a>
                        </li> 
                        <li className={ `${classes.item} ${classes.active}` } >
                            <a  href="/messages">
                                Messages
                            </a>
                        </li>
                        <li className={classes.item}>
                            <a  href="/news">
                                News
                            </a>
                        </li>
                        <li className={classes.item}>
                            <a  href="/music">
                                Music
                            </a>
                        </li>
                        <li className={classes.item}>
                            <a  href="/settings">
                                Settings
                            </a>
                        </li>

                    </ul>
                </nav>
            </aside>
        </div>
    );
}
export default Dashboard;