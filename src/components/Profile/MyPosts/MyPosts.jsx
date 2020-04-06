import React from 'react';

import classes from './style.module.css';
import Post from './Post/Post';


const posts = [
    {
        id : "1",
        message : "Hi, how are you?",
        likesCount : 12
    },
    {
        id : "2",
        message : "It's my first posts",
        likesCount : 11
    },
    {
        id : "3",
        message : "blabla",
        likesCount : 4
    },
    {
        id : "4",
        message : "blablabla",
        likesCount : 55
    }
]

const MyPosts = () => {


    const postsElement = posts.map( ({id, message, likesCount}) => (
        <Post message={message} likesCount={likesCount} />
      
    )) ;

    return (
        <div className={classes.postsBlock}>
            <div className={classes.posts}>
               <h2>My Posts</h2>
                <div> 
                    
                    <div>
                        <textarea defaultValue="Your News">
                        </textarea>
                    </div>
                    <div>
                        <button>Add Post</button>
                    </div>
                 </div>

                    <div className={classes.posts}>
                       { postsElement }
                    </div>
            </div>
        </div>
    );
}
export default MyPosts;