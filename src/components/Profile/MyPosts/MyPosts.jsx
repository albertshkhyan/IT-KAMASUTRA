import React from 'react';

import classes from './style.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={classes.MyPosts}>
            <div classNam={classes.posts}>
               <h2>My Posts</h2>
               <button>Add Post</button>
               <button>Remove Post</button>
                <div> 
                    <textarea defaultValue="Your News">
                    </textarea>
                 </div>
                <ul>
                    <Post />
                    <Post />
                    <Post />
                    <Post />
           
                </ul>
            </div>
        </div>
    );
}
export default MyPosts;