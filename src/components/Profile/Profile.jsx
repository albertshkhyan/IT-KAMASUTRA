import React from 'react';

import classes from './style.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={classes.Profile}>
    
        <ProfileInfo />
        <MyPosts 
        addPost = {props.addPost}  
        posts = { props.profilePage.posts } 
        newPostText = { props.profilePage.newPostText }
        updateNewPostText = {props.updateNewPostText}
        />

        </div>
    );
}
export default Profile;