import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from "redux-logger";
import dialogPageReducer from './dialogPageReducer';
import profilePageReducer from './profilePageReducer';
import userPageReducer from './userPageReducer';
import authReducer from './authReducer';
import thunk from "redux-thunk";
console.log('thunk', thunk);


const reducers = combineReducers({
    dialogPage: dialogPageReducer,
    profilePage: profilePageReducer,
    usersPage: userPageReducer,
    auth: authReducer 
});

////not working thunk-middleware -> TypeError: store.getState is not a function  - ❌
// const store = createStore(reducers,
//         thunk   
// );


////TypeError: t.apply is not a function - ❌
// const store = createStore(reducers,
//     applyMiddleware(
//         thunk,
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
// );

/* must do through compose -> compose - This is a functional programming utility, and is included in Redux as a convenience. You might want to use it to apply several store enhancers in a row. - ✅
compose need for redux devtool exension
*/
// const middlware = [thunk, logger];
// const store = createStore(reducers,
//         applyMiddleware( ...middlware),
// );

////with compose
const middlware = [thunk, logger];
const store = createStore(reducers,
    compose(
        applyMiddleware( ...middlware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);


export default store;
