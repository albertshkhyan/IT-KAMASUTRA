import React from 'react';

import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Dialogs from './components/Dialogs/Dialogs';

import './App.css';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <div className="app-wrapper-content">
            {/* <Profile /> */}
            <Dialogs />
      </div>
    </div>

  );
}

export default App;
