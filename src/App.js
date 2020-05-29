import React, { Component } from 'react';

import DialogsContainer from './common/components/Dialogs/DialogsContainer';
import UsersContainer from './common/components/Users/UsersContainer';
import Dashboard from './common/components/Dashboard/Dashboard';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import ProfileContainer from './common/components/Profile/ProfileContainer';
import HeaderContainer from './common/components/Header/HeaderContainer';
import Login from './common/components/Login/Login';
import { initilizeApp } from './redux/appReducer';
import { connect } from 'react-redux';
import Preloader from './common/components/Preloader/Preloader';

class App extends Component {
  componentDidMount() {
    this.props.initilizeApp();
  }
  render() {
    if (!this.props.initilized) return <Preloader />;
    return (
      <BrowserRouter>
        <div className="App">
          <HeaderContainer />
          <Dashboard />
          <div className="app-wrapper-content">
            <Route exact path="/dialogs" render={() => <DialogsContainer />} />
            <Route path="/profile/:userID?" render={() => <ProfileContainer />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/login" render={() => <Login />} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
const mapStateToPorps = (state) => ({ initilized: state.appInit.initilized });
export default connect(mapStateToPorps, { initilizeApp })(App);
