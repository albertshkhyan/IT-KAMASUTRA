import React from 'react';

import classes from './style.module.css';

const Profile = () => {
    return (
        <div className={classes.Profile}>
            <div>
                <img src="https://www.estaentumundo.com/wp-content/imagenes/2017/06/playa-varadero-cuba-e1497900761571.jpg" alt="" />
            </div>

            <div> avatar + description </div>

            <div classNam="posts">
               <h2>My Posts</h2>
                <div> 
                    <textarea defaultValue="Your News">
                    </textarea>
                 </div>
                <ul>
                    <li className={classes.item}>
                        Post 1
                    </li>
                    <li className={classes.item}>
                        Post 2
                    </li>
                </ul>
            </div>

        </div>
    );
}
export default Profile;