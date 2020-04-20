import React from 'react';

import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Dialogs from './components/Dialogs/Dialogs';

import './App.css';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Dashboard />
        <div className="app-wrapper-content">
          <Route exact path="/dialogs" render={() => (
            <Dialogs
              dialogPage={props.store.getState().dialogPage}
              dispatch={props.store.dispatch}
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
