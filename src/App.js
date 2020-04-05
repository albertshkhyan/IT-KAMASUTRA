import React from 'react';

import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Dialogs from './components/Dialogs/Dialogs';

import './App.css';
import Profile from './components/Profile/Profile';
// import { Route } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Dashboard />
        <div className="app-wrapper-content">
              {/* <Profile /> */}
              {/* <Dialogs /> */}
              <Route path="/dialogs" component={ Dialogs }  />
              <Route path="/profile" component={ Profile }  />
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
