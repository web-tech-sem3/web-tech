import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import balsamiqBold from '../fonts/balsamiq/BalsamiqSans-Bold.ttf';
import '../styles/loginform.css';
import loginService from '../services/login';

const LoginForm = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);

  const handleLoginSubmit = async event => {
    event.preventDefault();
    const obj = {
      userName: username,
      password: password,
    };
    try {
      const val = await loginService.login(obj);
      setToken(val.token);
    } catch (e) {
      setError('Wrong Username or Password');
      console.log(error);
    }
  };

  const handleUsernameChange = event => {
    event.preventDefault();
    setUsername(event.target.value);
  };
  const handlePasswordChange = event => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  return (
    <div align="center">
      <h2 className={{ font: balsamiqBold }}>Login Form</h2>
      <div className="form">
        <div className="details">
          <form onSubmit={handleLoginSubmit}>
            <div>
              <div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <TextField
                  type="text"
                  required
                  label="Username"
                  fullWidth
                  onChange={handleUsernameChange}
                />
              </div>

              <p>&nbsp;</p>
              <div>
                <TextField
                  type="password"
                  required
                  label="Password"
                  fullWidth
                  onChange={handlePasswordChange}
                />
              </div>
              <p>&nbsp;</p>
              <Button type="submit" class="login-btn">
                Login
              </Button>
              <p> </p>
              <p> </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
