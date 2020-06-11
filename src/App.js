import React, { Component } from 'react';




import Dashboard from './common/components/Dashboard/Dashboard';

import HeaderContainer from './common/components/Header/HeaderContainer';
import { initilizeApp } from './redux/appReducer';
import { connect } from 'react-redux';
import Preloader from './common/components/Preloader/Preloader';

import withSuspense from './hoc/withSuspense';


import { Switch, Route } from 'react-router-dom';

import Loader from './common/components/Loader/Loader';
import { loaderKasatka } from "./assets";

import './App.css';

// import Login from './common/components/Login/Login';
// import UsersContainer from './common/components/Users/UsersContainer';
// import DialogsContainer from './common/components/Dialogs/DialogsContainer';
// import ProfileContainer from './common/components/Profile/ProfileContainer';
/**
 * The best way do code-spliting - Dynamic import
 * give error withoue suspense component
 */
const Login = React.lazy(() => import("./common/components/Login/Login"));
const UsersContainer = React.lazy(() => import("./common/components/Users/UsersContainer"));
const ProfileContainer = React.lazy(() => import("./common/components/Profile/ProfileContainer"));
const DialogsContainer = React.lazy(() => import("./common/components/Dialogs/DialogsContainer"));

////without React.lazy not 😓
// const foo = async () => await import("./assets");
// const {samurai1, samurai2, samimport Loader from './common/components/Loader/Loader';
// uraiLogo, userLogo} = foo();//foo return promise 


class App extends Component {
  componentDidMount() {
    this.props.initilizeApp();
  }
  render() {
    if (!this.props.initilized) return <Preloader />;
    return (
      <div className="App">
        <HeaderContainer />
        <Dashboard />
        <div className="app-wrapper-content">
          <Switch>
            {/* <Route exact path="/dialogs" render={() => {
              return <React.Suspense fallback={<h2>Loading...</h2>}>
                <DialogsContainer />
              </React.Suspense>
            }} /> */}
            {/* Or with hoc withSuspense */}
            <Route exact path="/dialogs" render={() => (
              withSuspense(DialogsContainer, <Loader imageLoader={loaderKasatka} />)()
            )} />
            <Route path="/profile/:userID?" render={() => withSuspense(ProfileContainer, <Loader imageLoader={loaderKasatka} />)()} />
            <Route path="/users" render={() => (
              withSuspense(UsersContainer, <Loader imageLoader={loaderKasatka} />)()
            )} />
            <Route path="/login" render={() => withSuspense(Login, <Loader imageLoader={loaderKasatka} />)()} />
          </Switch>
        </div>
      </div>
    );
  }
}
const mapStateToPorps = (state) => ({ initilized: state.appInit.initilized });
export default connect(mapStateToPorps, { initilizeApp })(App);
