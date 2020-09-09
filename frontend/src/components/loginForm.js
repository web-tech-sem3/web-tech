import React, { useState } from 'react';
import { Card, CardContent, Button, TextField } from '@material-ui/core';
import '../styles/loginform.css';
import balsamiqBold from '../fonts/balsamiq/BalsamiqSans-Bold.ttf';

const LoginForm = props => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const handleUsernameChange = event => {
    event.preventDefault();
    setUsername(event.target.value);
    console.log(username);
  };
  const handlePasswordChange = event => {
    event.preventDefault();
    console.log(password);
    setPassword(event.target.value);
  };

  return (
    <div align="center">
      <h2 class={{ font: balsamiqBold }}>Login Form</h2>
      <div class="form">
        <div class="details">
          <form onSubmit={props.handleLoginSubmit}>
            <div>
              <div>
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
