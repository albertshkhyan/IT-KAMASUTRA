import React from 'react';

import classes from './style.module.css';
import Post from './Post/Post';




const MyPosts = (props) => {
debugger;
    const myRef = React.createRef();


    const postsElement = props.posts.map( ({id, message, likesCount}) => (
        <Post message={message} likesCount={likesCount} />
      
    )) ;

    const handleClick = () => {
        // props.addPost();
        props.dispatch( { type : "ADD_POST" } );
        
        
    }
    const handleOnChange = () => {
        // props.updateNewPostText(myRef.current.value)
        props.dispatch({ type : "UPDATE_NEW_POST_TEXT",  newText : myRef.current.value})
    }

    return (
        <div className={classes.postsBlock}>
            <div className={classes.posts}>
               <h2>My Posts</h2>
                <div> 
                    
                    <div>
                        <textarea onChange={ handleOnChange } ref = { myRef } placeholder="Your News" value={ props.newPostText }>
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