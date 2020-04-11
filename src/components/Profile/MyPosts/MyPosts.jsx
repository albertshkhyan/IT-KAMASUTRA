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
        props.addPost();
        // myRef.current.value = "";//why not cleared - you cant't change me, only BLL 
        // props.updateNewPostText("");//if user add too much text, we must warn about it, but we cannot, because we delete it. -< to contradict(հակասել) SRP, we cleared in BLL(addPost)

        
    }
    const handleOnChange = () => {
        // console.log(myRef.current.value);
        
        props.updateNewPostText(myRef.current.value)
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