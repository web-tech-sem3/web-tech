import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import background from '../images/background.jpg';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import UserService from '../services/user';
import Copyright from './copyright';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Card, Snackbar, Tooltip, Zoom } from '@material-ui/core';
import logo from '../images/logo.svg';
import SignUpDialog from './signUpDialog';
import { Alert } from '@material-ui/lab';
import monkey from '../images/monkey.svg';

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  copyright: {
    height: 70,
    paddingTop: 25,
  },
  back: {
    paddingTop: 8,
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    marginTop: 0,
    backgroundPosition: 'center',
  },
  card: {
    marginTop: theme.spacing(8),
    borderRadius: '2%',
    backgroundColor: 'white',
    marginLeft: '10%',
    opacity: '95%',
    boxShadow: '2px 2px 25px',
    transition: 'transform .3s',
    '&:hover': {
      transform: 'scale(1.01)',
    },
  },
  monkey: {
    width: '30vh',
    opacity: '80%',
    height: '30vh',
    marginTop: '30vh',
    marginLeft: '2vh',
    marginRight: '20vh',
    transition: 'all .1s',
    '&:hover': {
      transform: 'scale(1.03)',
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUp = () => {
  const classes = useStyles();
  const [username, setUsername] = useState();
  const [name, setName] = useState();
  const [showDialog, setShowDialog] = useState(false);
  const [password, setPassword] = useState();
  const [cPassword, setCPassword] = useState();
  const [passwordSnackOpen, setPasswordSnackOpen] = useState(false);
  const [errorSnackOpen, setErrorSnackOpen] = useState(false);
  const [successSnackOpen, setSuccessSnackOpen] = useState(false);

  const handleNameChange = e => {
    e.preventDefault();
    setName(e.target.value);
  };
  const handleUsernameChange = e => {
    e.preventDefault();
    setUsername(e.target.value);
  };
  const handlePasswordChange = e => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  const handleCPasswordChange = e => {
    e.preventDefault();
    setCPassword(e.target.value);
  };

  const handleSignUp = async e => {
    e.preventDefault();
    if (password !== cPassword) {
      setPasswordSnackOpen(true);
      setUsername('');
      setName('');
      setPassword('');
      setCPassword('');
    } else {
      const object = {
        userName: username,
        name,
        password,
      };
      setUsername('');
      setName('');
      setPassword('');
      setCPassword('');
      try {
        const data = await UserService.signUp(object);
        console.log(data);
        setSuccessSnackOpen(true);
      } catch (exception) {
        console.log(exception);
        setErrorSnackOpen(true);
      }
    }
  };

  return (
    <div className={classes.back}>
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex' }}>
          <img
            src={monkey}
            className={classes.monkey}
            onMouseEnter={() => setShowDialog(true)}
            onMouseLeave={() => setShowDialog(false)}
          />
          {showDialog ? <SignUpDialog /> : null}
        </div>
        <Container component="main" maxWidth="xs" className={classes.card}>
          <CssBaseline />
          <div className={classes.paper}>
            <Tooltip title="U_Table" arrow TransitionComponent={Zoom}>
              <img
                src={logo}
                style={{ width: '10vh', height: '10vh', marginTop: '2vh' }}
              />
            </Tooltip>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <form className={classes.form} onSubmit={handleSignUp}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    onChange={handleNameChange}
                    id="firstName"
                    label="Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    onChange={handleUsernameChange}
                    name="username"
                    autoComplete="username"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    onChange={handlePasswordChange}
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    onChange={handleCPasswordChange}
                    name="confirm password"
                    label="Confirm Password"
                    type="password"
                    id="cpassword"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link to="/login">Already have an account? Sign in</Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </div>
      <br />
      <Snackbar autoHideDuration={1500} open={passwordSnackOpen}>
        <Alert severity="error">Passwords Don't Match!</Alert>
      </Snackbar>
      <Snackbar autoHideDuration={1500} open={errorSnackOpen}>
        <Alert severity="error">Username Already Taken!</Alert>
      </Snackbar>
      <Snackbar autoHideDuration={1500} open={successSnackOpen}>
        <Alert severity="success">Signed Up, Now Login!</Alert>
      </Snackbar>
      <Card className={classes.copyright}>
        <Copyright />
      </Card>
    </div>
  );
};

export default SignUp;
