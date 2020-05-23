import React from "react";

import classes from "./style.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";

const MyPosts = (props) => {
  const postsElement = props.posts.map(({ id, message, likesCount }) => (
    <Post key={id} message={message} likesCount={likesCount} />
  ));

  const onSubmitHandle = (values) => {
    let isEmpty = Object.keys(values).length;
    isEmpty && props.addPost(values.myPostTextarea);
  };

  return (
    <div className={classes.postsBlock}>
      <div className={classes.posts}>
        <h2>My Posts</h2>
        <MyPostsReduxForm onSubmit={onSubmitHandle} />
        <div className={classes.posts}>{postsElement}</div>
      </div>
    </div>
  );
};

const MyPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="myPostTextarea"
          component="textarea"
          placeholder="Your News"
        />
      </div>
      <div>
        <button>Add Post</button>
      </div>
    </form>
  );
};

const MyPostsReduxForm = reduxForm({
  form: "myPostContainer",
})(MyPostsForm);

export default MyPosts;
