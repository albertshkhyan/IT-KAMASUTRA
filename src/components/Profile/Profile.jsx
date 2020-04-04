import React from 'react';

import classes from './style.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={classes.Profile}>
            <div>
                <img src="https://www.estaentumundo.com/wp-content/imagenes/2017/06/playa-varadero-cuba-e1497900761571.jpg" alt="" />
            </div>

            <div> avatar + description </div>

        <MyPosts />

        </div>
    );
}
export default Profile;