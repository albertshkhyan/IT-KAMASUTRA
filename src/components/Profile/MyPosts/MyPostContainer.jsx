import MyPosts from "./MyPosts";
import { updateNePostActionCreator } from "../../../redux/profilePageReducer";
import { addPostActionCreator } from "../../../redux/profilePageReducer";

import {connect} from 'react-redux';


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
