import React from 'react';

import Header from './common/components/Header/Header';

import DialogsContainer from './common/components/Dialogs/DialogsContainer';
import UsersContainer from './common/components/Users/UsersContainer';
import Dashboard from './common/components/Dashboard/Dashboard';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import ProfileContainer from './common/components/Profile/ProfileContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        
        <Header />
        <Dashboard />
        <div className="app-wrapper-content">
          <Route exact path="/dialogs" component={DialogsContainer} />
          <Route path="/profile" component={ProfileContainer} />
          <Route path="/users" component={UsersContainer} />
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
