import React from 'react';

import classes from './style.module.css';

const Post = () => {
    return (
        <div className={classes.Post}>
                <ul>
                    <li className={classes.item}>
                        <img src="https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg" alt=""/>
                        Post 1
                        <div>
                            <span>like</span>
                        </div>
                    </li>
                </ul>
            </div>
    );
}
export default Post;