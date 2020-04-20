import React from "react";
import MyPosts from "./MyPosts";
import { updateNePostActionCreator } from "../../../redux/profile_page_reducer";
import { addPostActionCreator } from "./../../../redux/profile_page_reducer";

const MyPostContainer = (props) => {
  const state = props.store.getState().profilePage;
  const handleUpdateNewPostText = (newText) => {
    props.store.dispatch(updateNePostActionCreator(newText));
  };
  const handleAddPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  return (
    <MyPosts
      newPostText={state.newPostText}
      posts={state.posts}
      addPost={handleAddPost}
      updateNewPostText={handleUpdateNewPostText}
    />
  );
};
export default MyPostContainer;
