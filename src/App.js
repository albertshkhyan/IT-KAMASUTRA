import React from 'react';

import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';

import './App.css';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

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
