import React, { Component } from 'react';
import User from './User';

class Logout extends Component {
  async componentDidMount() {
    await User.logout();
    this.props.history.push('/');
  }

  render() {
    return (
      <div>Logout</div>
    );
  }
}

export default Logout;