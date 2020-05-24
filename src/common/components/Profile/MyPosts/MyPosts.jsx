import React from "react";

import classes from "./style.module.css";
import Post from "./Post/Post";
import MyPostsForm from "./MyPostsForm";

const MyPosts = (props) => {
  const postsElement = props.posts.map(({ id, message, likesCount }) => (
    <Post key={id} message={message} likesCount={likesCount} />
  ));

  const onSubmitHandle = (values) => {
    // let isEmpty = Object.keys(values).length;
    // isEmpty && props.addPost(values.myPostTextarea);
    ////do with validation
    props.addPost(values.myPostTextarea);
  };

  return (
    <div className={classes.postsBlock}>
      <div className={classes.posts}>
        <h2>My Posts</h2>
        <MyPostsForm onSubmit={onSubmitHandle} />
        <div className={classes.posts}>{postsElement}</div>
      </div>
    </div>
  );
};

export default MyPosts;
