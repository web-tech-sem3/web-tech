<<<<<<< HEAD
import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import balsamiqBold from "../fonts/balsamiq/BalsamiqSans-Bold.ttf";
// import '../styles/loginform.css';
import Css from "../styles/loginform.module.css";
import loginService from "../services/login";
import img from "../images/Login.jpg";
import form from "../styles/Loginform2.module.css";
=======
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import background from '../images/background.jpg';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
>>>>>>> 39d7ae8b3f4a06ccc5dbed3962c5b6fa610bca4f

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      U_Table
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

<<<<<<< HEAD
  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    const obj = {
      userName: username,
      password: password,
    };
    try {
      const val = await loginService.login(obj);
      setToken(val.token);
    } catch (e) {
      setError("Wrong Username or Password");
      console.log(error);
    }
  };

  const handleUsernameChange = (event) => {
    event.preventDefault();
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  return (
    <div className={Css.body}>
      <div className={Css.container}>
        <div className={Css.Wall}>
          <img src={img}></img>
        </div>
        <div className={Css.form}>
          <div className={Css.formContainer}>
            <div className={form.loginbox}>
              <h2>Login</h2>
              <form>
                <div className={form.userbox}>
                  <input type="text" name="" required=""></input>
                  <label>Username</label>
                </div>
                <div className={form.userbox}>
                  <input type="password" name="" required=""></input>
                  <label>Password</label>
                </div>
                <a href="#">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Submit
                </a>
              </form>
            </div>
          </div>
=======
const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignInSide = ({ setUser }) => {
  const classes = useStyles();

  const login = () => {
    setUser(true);
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={login}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/signup">Don't have an account?</Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
>>>>>>> 39d7ae8b3f4a06ccc5dbed3962c5b6fa610bca4f
        </div>
      </Grid>
    </Grid>
  );
};

export default SignInSide;
