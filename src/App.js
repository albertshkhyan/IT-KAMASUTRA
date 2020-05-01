import React from 'react';

import Header from './common/components/Header/Header';

import DialogsContainer from './common/components/Dialogs/DialogsContainer';
import UsersContainer from './common/components/Users/UsersContainer';
import Dashboard from './common/components/Dashboard/Dashboard';
import { BrowserRouter, Route } from 'react-router-dom';
import Profile from './common/components/Profile/Profile';

import './App.css';

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        
        <Header />
        <Dashboard />
        <div className="app-wrapper-content">
          <Route exact path="/dialogs" component={DialogsContainer} />
          <Route path="/profile" component={Profile} />
          <Route path="/users" component={UsersContainer} />
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
