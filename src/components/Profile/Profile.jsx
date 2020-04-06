import React from 'react';

import classes from './style.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
    return (
        <div className={classes.Profile}>
    
        <ProfileInfo />
        <MyPosts />

        </div>
    );
}
export default Profile;