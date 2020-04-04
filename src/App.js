import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Main from './components/Main';


function App() {
  return (
    <div className="App">
      <Main />
      <Header />
      <Dashboard />
    </div>

  );
}

export default App;
