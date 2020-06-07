import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from "redux-form";


import logger from "redux-logger";
import thunk from "redux-thunk";

import dialogPageReducer from './dialogReducer';
import profilePageReducer from './profileReducer';
import userReducer from './userReducer';
import authReducer from './authReducer';
import appReducer from './appReducer';

const reducers = combineReducers({
    dialogPage: dialogPageReducer,
    profile: profilePageReducer,
    users: userReducer,
    auth: authReducer,
    // you have to pass formReducer under 'form' key,
    form: formReducer,
    appInit: appReducer
});

////with compose
const middlware = [thunk, logger];
const store = createStore(reducers,
    compose(
        applyMiddleware(...middlware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);


export default store;
