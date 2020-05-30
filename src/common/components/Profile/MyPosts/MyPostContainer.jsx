import MyPosts from "./MyPosts";

import { connect } from "react-redux";
import {
  addPostActionCreator,
} from "./../../../../redux/profilePageReducer";

const mapStateToProps = (state) => {
  // console.log('mpaStateToProps Work Every time when change props ✅');
  return {
    posts: state.profile.posts,
    newPostText: state.profile.newPostText,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => dispatch(addPostActionCreator(newPostText)),
  };
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostContainer;
