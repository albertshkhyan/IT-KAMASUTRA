import React from 'react';

import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <Main />
    </div>

  );
}

export default App;
