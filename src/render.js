import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { addPosts } from './redux/state';

function rerenderEntireTree(state) {
    console.log('state', state);
    ReactDOM.render(
      <React.StrictMode>
        <App state = { state } addPost = { addPosts }/>
      </React.StrictMode>,
      document.getElementById('root')
    ); 
  }

  export default rerenderEntireTree;