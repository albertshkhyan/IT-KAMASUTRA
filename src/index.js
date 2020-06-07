import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import App from './App';
import store from './redux/redux_store';
// import { Provider } from "./createMyContext";

import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';

window.store = store;

// setInterval(() => {
//   store.dispatch({type:"FAKE"});
// }, 1000);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

////when we download redux-logger middleware we don't need it 👇
// store.subscribe(() => {
//   console.log(store.getState());
// });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
