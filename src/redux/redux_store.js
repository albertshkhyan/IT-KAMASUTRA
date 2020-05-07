import { createStore, combineReducers } from 'redux';
import dialogPageReducer from './dialogPageReducer';
import profilePageReducer from './profilePageReducer';
import userPageReducer from './userPageReducer';
import authReducer from './authReducer';

const reducers = combineReducers({
    dialogPage: dialogPageReducer,
    profilePage: profilePageReducer,
    usersPage: userPageReducer,
    auth : authReducer
});

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
