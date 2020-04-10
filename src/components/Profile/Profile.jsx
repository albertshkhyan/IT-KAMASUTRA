import React from 'react';

import classes from './style.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={classes.Profile}>
    
        <ProfileInfo />
        <MyPosts addPost = {props.addPost}  posts = { props.postPage.posts } />

        </div>
    );
}
export default Profile;