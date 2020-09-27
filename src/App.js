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
import CardDetail from './components/CardDetail';
import EditPreview from './components/EditPreview';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/detail" component={CardDetail} />
            <Route path="/edit" component={EditPreview} />
          </div>
        </Router>
      </div>
    );
  }
};