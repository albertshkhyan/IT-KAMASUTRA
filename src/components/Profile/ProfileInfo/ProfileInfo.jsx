import React from 'react';

import classes from './style.module.css';

const ProfileInfo = props => {
    return (
        <div className={classes.ProfileInfo}>
            <div>
                <img src="https://www.estaentumundo.com/wp-content/imagenes/2017/06/playa-varadero-cuba-e1497900761571.jpg" alt="estaentumundo" />
            </div>
            <div className={classes.avatarDescription}> avatar + description </div>
        </div>
    );
}
export default ProfileInfo;