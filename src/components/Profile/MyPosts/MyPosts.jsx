import React from 'react';

import classes from './style.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={classes.MyPosts}>
            <div className={classes.posts}>
               <h2>My Posts</h2>
                <div> 
                    <textarea defaultValue="Your News">
                    </textarea>
                    <button>Add Post</button>
                 </div>
                    <Post message="Hi, how are you?" likesCount="0"/>
                    <Post message="It's my first posts" likesCount="17"/>
            </div>
        </div>
    );
}
export default MyPosts;