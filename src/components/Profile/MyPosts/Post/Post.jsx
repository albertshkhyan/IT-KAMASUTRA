import React from 'react';

import classes from './style.module.css';

const Post = (props) => {
    return (
        <div className={classes.Post}>
                    <div className={classes.item}>
                        <img src="https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg" alt=""/>
                        {props.message}
                        <div>
                            <span>like </span> 
                            <span>{props.likesCount}</span>
                        </div>
                    </div>
            </div>
    );
}
export default Post;