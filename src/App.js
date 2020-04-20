import React from 'react';

import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';

import './App.css';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';

function App(props) {
  debugger

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Dashboard />
        <div className="app-wrapper-content">
          <Route exact path="/dialogs" component={DialogsContainer} />
          <Route path="/profile" component={Profile} />
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
