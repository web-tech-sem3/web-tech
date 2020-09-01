import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Button,
  TextField,
} from '@material-ui/core';
import '../styles/loginform.css';
import balsamiqBold from '../fonts/balsamiq/BalsamiqSans-Bold.ttf';

const LoginForm = props => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const handleUsernameChange = event => {
    event.preventDefault();
    setUsername(event.target.value);
    console.log(username)
  };
  const handlePasswordChange = event => {
    event.preventDefault();
    console.log(password)
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
                <TextField type="text" required label="Username" fullWidth onChange={handleUsernameChange}/>
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
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
