import { createStore, combineReducers } from 'redux';
import dialogPageReducer from './dialog_page_reducer';
import profilePageReducer from './profile_page_reducer';

const reducers = combineReducers({
    dialogPage: dialogPageReducer,
    profilePage: profilePageReducer
});

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
