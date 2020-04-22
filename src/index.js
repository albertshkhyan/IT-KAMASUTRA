import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import App from './App';
import store from './redux/redux_store';
// import { Provider } from "./createMyContext";

import { Provider } from "react-redux";


import './index.css';

console.log('store', store);
window.state = store.getState();

// function rerenderEntireTree() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
// }

// store.subscribe(() => {
//   // console.log("vhange state...");
  
//   rerenderEntireTree();
// });
// rerenderEntireTree();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
