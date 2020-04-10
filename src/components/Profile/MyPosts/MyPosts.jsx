import React from 'react';

import classes from './style.module.css';
import Post from './Post/Post';




const MyPosts = (props) => {

    const myRef = React.createRef();


    const postsElement = props.posts.map( ({id, message, likesCount}) => (
        <Post message={message} likesCount={likesCount} />
      
    )) ;

    const handleClick = () => {
        // myRef.current.value
        props.addPost(myRef.current.value);
        myRef.current.value = "";
        
    }

    return (
        <div className={classes.postsBlock}>
            <div className={classes.posts}>
               <h2>My Posts</h2>
                <div> 
                    
                    <div>
                        <textarea ref = { myRef } placeholder="Your News">
                        </textarea>
                    </div>
                    <div>
                        <button onClick={ handleClick }>Add Post</button>
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