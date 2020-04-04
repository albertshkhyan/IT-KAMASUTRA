import React from 'react';

import classes from './style.module.css';

const Dashboard = () => {
    return (
        <div className={classes.Dashboard}>
            <aside>
                <nav>
                    <ul>
                        <li >
                            <a className={classes.item} href="#s">
                                Profile
                            </a>
                        </li> 
                        <li >
                            <a className={ `${classes.item} ${classes.active}` }  href="#s">
                                Messages
                            </a>
                        </li>
                        <li >
                            <a className={classes.item} href="#s">
                                News
                            </a>
                        </li>
                        <li >
                            <a className={classes.item} href="#s">
                                Music
                            </a>
                        </li>
                        <li >
                            <a className={classes.item} href="#s">
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