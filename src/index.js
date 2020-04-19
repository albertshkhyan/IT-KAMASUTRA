import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import App from './App';
// import  store  from './redux/Mystore';
import store  from './redux/redux_store';

import './index.css';

window.state = store.getState();
console.log('store', store);


function rerenderEntireTree(state) {
    ReactDOM.render(
        <App  state = { state }
              dispatch = {store.dispatch.bind(store)}
          />,
      document.getElementById('root')
    ); 
  }  

  store.subscribe(() => {
    rerenderEntireTree(store.getState());
  });
  rerenderEntireTree(store.getState());

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
 