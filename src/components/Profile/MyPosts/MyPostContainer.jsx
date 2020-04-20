import React from "react";

import MyPosts from "./MyPosts";
import { updateNePostActionCreator } from "../../../redux/profile_page_reducer";
import { addPostActionCreator } from "./../../../redux/profile_page_reducer";
import CreateMyContext from "./../../../createMyContext";

const MyPostContainer = (props) => {
  return (
    <CreateMyContext.Consumer>
      {(store) => {
        const state = store.getState().profilePage;
        const handleUpdateNewPostText = (newText) => {
          store.dispatch(updateNePostActionCreator(newText));
        };
        const handleAddPost = () => {
          store.dispatch(addPostActionCreator());
        };
        return (
          <MyPosts
            newPostText={state.newPostText}
            posts={state.posts}
            addPost={handleAddPost}
            updateNewPostText={handleUpdateNewPostText}
          />
        );
      }}
    </CreateMyContext.Consumer>
  );
};
export default MyPostContainer;
