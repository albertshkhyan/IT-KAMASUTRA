import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNePostActionCreator } from '../../../redux/Mystore';



const MyPostContainer = (props) => {
    const myRef = React.createRef();

    const handleAddPost = () => {
        props.dispatch(addPostActionCreator());
    }

    const handleUpdateNewPostText = (newText) => {
        props.dispatch(updateNePostActionCreator(myRef.current.value));

    }

    return <MyPosts 
    addPost = { handleAddPost } 
    updateNewPostText = { handleUpdateNewPostText } 
    posts = {props}
    />;
}
export default MyPostContainer;