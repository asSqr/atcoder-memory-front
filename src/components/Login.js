import React from 'react';
import { LoginForm } from 'react-form-login';
import User from './User';

const Login = props => {
  return (
    <LoginForm onSubmit={async (userId, password) => {
      await User.login(userId, password);
      props.history.push('/');
    }} />
  );
}

export default Login;