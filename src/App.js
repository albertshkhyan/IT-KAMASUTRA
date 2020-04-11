import React from 'react';

import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Dialogs from './components/Dialogs/Dialogs';

import './App.css';
import Profile from './components/Profile/Profile';
// import { Route } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Dashboard />
        <div className="app-wrapper-content">
              {/* <Profile /> */}
              {/* <Dialogs /> */}
              <Route exact path="/dialogs" render={ () => (
                <Dialogs dialogPage = { props.state.dialogPage }/>
               ) }  />  
              <Route path="/profile" render={ () => (
                <Profile 
                addPost = { props.addPost } 
                profilePage = { props.state.profilePage } 
                updateNewPostText = { props.updateNewPostText }
                />
               ) }  />
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
