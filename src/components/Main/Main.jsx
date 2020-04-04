import React from 'react';

import Profile from '../Profile/Profile';

import classes from './style.module.css';

const Main = () => {
    return (
        <main className={classes.Main}>
            <Profile />
        </main>
    );
}
export default Main;