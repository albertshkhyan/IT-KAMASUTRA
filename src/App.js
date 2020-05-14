import React from 'react';

import DialogsContainer from './common/components/Dialogs/DialogsContainer';
import UsersContainer from './common/components/Users/UsersContainer';
import Dashboard from './common/components/Dashboard/Dashboard';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import ProfileContainer from './common/components/Profile/ProfileContainer';
import HeaderContainer from './common/components/Header/HeaderContainer';
import Login from './common/components/Login/Login';

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        
        <HeaderContainer />
        <Dashboard />
        <div className="app-wrapper-content">
          <Route exact path="/dialogs" component={DialogsContainer} />
          <Route path="/profile/:userID?" component={ProfileContainer} />
          <Route path="/users" component={UsersContainer} />
          <Route path="/login" component={Login} />
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
