import React from "react";

import classes from "./style.module.css";
import Post from "./Post/Post";
import MyPostsForm from "./MyPostsForm";


const MyPosts = (props) => {
  /**
   * Imutable
   * pure function always return something.
   * No side effect.
   * determination ( idempotency )
   */
  ////⛔ mutate BLL
  // const postsElement = props.posts.reverse().map(({ id, message, likesCount }) => (
  //   <Post key={id} message={message} likesCount={likesCount} />
  // ));

  ////💹 shallow coppy - not mutate BLL
  const postsElement = [...props.posts].reverse().map(({ id, message, likesCount }) => (
    <Post key={id} message={message} likesCount={likesCount} />
  ));

  const onSubmitHandle = (values) => {
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
