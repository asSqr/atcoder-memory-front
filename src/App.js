import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Login from './components/Login';
import Logout from './components/Logout';
import Auth from './components/Auth';
import Home from './components/Home';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />

          <Auth>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </Auth>
        </Switch>
      </Router>
    );
  }
};