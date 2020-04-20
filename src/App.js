import React from 'react';

import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';

import './App.css';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Dashboard />
        <div className="app-wrapper-content">
          <Route exact path="/dialogs" render={() => (
            <DialogsContainer store = {props.store}
            />
          )} />
          <Route path="/profile" render={() => (
            <Profile
              store={props.store}
            />
          )} />
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
