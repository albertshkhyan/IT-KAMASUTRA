import React from 'react';

import classes from './style.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostContainer from './MyPosts/MyPostContainer';

const Profile = (props) => {
    return (
        <div className={classes.Profile}>
    
        <ProfileInfo />
        <MyPostContainer store = { props.store  }  />
        </div>
    );
}
export default Profile;