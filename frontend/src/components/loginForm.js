import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Container,
  makeStyles,
  Box,
  Button,
  TextField,
  Typography,
} from '@material-ui/core';
import logo from '../images/logo.png';
import { red } from '@material-ui/core/colors';
import '../styles/loginform.css';
import balsamiqBold from '../fonts/balsamiq/BalsamiqSans-Bold.ttf';

const LoginForm = props => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const handleUsernameChange = event => {
    event.preventDefault();
    setUsername(event.target.value);
  };
  const handlePasswordChange = event => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  return (
    <div align='center'>
      <div>
        <h2 class={{ font: balsamiqBold }}>Login Form</h2>
        <p>&nbsp;</p>
      </div>
      <Card class={{ minWidth: 420 }} variant="outlined">
        <CardContent>
          <form onSubmit={props.handleLoginSubmit}>
            <div>
              <div>
                <p>&nbsp;</p>
                <TextField type="text" required label="Username" fullWidth />
              </div>

              <p>&nbsp;</p>
              <div>
                <TextField
                  type="password"
                  required
                  label="Password"
                  fullWidth
                />
              </div>
              <p>&nbsp;</p>
              <Button type="submit" class="login-btn">
                Login
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
