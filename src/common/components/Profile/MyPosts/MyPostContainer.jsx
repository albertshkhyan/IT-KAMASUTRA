import MyPosts from "./MyPosts";

import {connect} from 'react-redux';
import { addPostActionCreator, updateNePostActionCreator } from './../../../../redux/profilePageReducer';


const mapStateToProps = (state) => {
  // console.log('mpaStateToProps Work Every time when change props ✅');
  return ({
    posts : state.profilePage.posts,
    newPostText : state.profilePage.newPostText
  })
};
const mapDispatchToProps = (dispatch) => {  
  return ({
    addPost : () => dispatch(addPostActionCreator()),
    updateNewPostText : (newText) =>{
      return  dispatch(updateNePostActionCreator(newText));
    }
  })
}


const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostContainer;
