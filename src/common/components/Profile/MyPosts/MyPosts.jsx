import React from "react";

import classes from "./style.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  // console.log('MyPosts  rendered after chenge ✅');
  const myRef = React.createRef();

  const postsElement = props.posts.map(({ id, message, likesCount }) => (
    <Post message={message} likesCount={likesCount} />
  ));

  const handleClick = (e) => {
    myRef.current.value && props.addPost();
  };

  const handleOnChange = (e) => {
    props.updateNewPostText(e.target.value);
  };

  return (
    <div className={classes.postsBlock}>
      <div className={classes.posts}>
        <h2>My Posts</h2>
        <div>
          <div>
            <textarea
              ref={myRef}
              onChange={handleOnChange}
              placeholder="Your News"
              value={props.newPostText}
            ></textarea>
          </div>
          <div>
            <button onClick={handleClick}>Add Post</button>
          </div>
        </div>

        <div className={classes.posts}>{postsElement}</div>
      </div>
    </div>
  );
};
export default MyPosts;
