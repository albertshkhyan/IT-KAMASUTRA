import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { addPosts, updateNewPostText } from './redux/state';

function rerenderEntireTree(state) {
    ReactDOM.render(
      <React.StrictMode>
        <App state = { state } addPost = { addPosts } updateNewPostText = { updateNewPostText }/>
      </React.StrictMode>,
      document.getElementById('root')
    ); 
  }  
    
  export default rerenderEntireTree;