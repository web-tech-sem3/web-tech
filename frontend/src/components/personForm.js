import {
  Avatar,
  Backdrop,
  Button,
  IconButton,
  makeStyles,
  MenuItem,
  Paper,
  Select,
  Snackbar,
  TextField,
  Tooltip,
  Zoom,
} from '@material-ui/core';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import HelpInfo from '../components/helpInfo';
import HelpIcon from '@material-ui/icons/Help';
import vidhu from '../images/vidhu.jpg';
import background from '../images/background.jpg';
import React, { useState } from 'react';
import { separateOperations } from 'graphql';
import { Alert, Autocomplete } from '@material-ui/lab';
import { Container } from 'react-bootstrap';
import panda from '../images/panda.svg';

const useStyles = makeStyles(theme => ({
  paper: {
    width: '70vh',
    borderRadius: '2vh',
    height: '86vh',
    padding: '3vh',
    marginLeft: '30vh',
    boxShadow: '0.1px 0.1px 10px 1px gray',
    animation: '$form 2s',
  },
  '@keyframes form': {
    '0%': {
      filter: 'blur(10px)',
      transform: 'translateX(200%)',
    },
    '100%': {
      transform: 'translateX(0%)',
    },
  },
  avatar: {
    width: '15vh',
    height: '15vh',
    transition: 'all .3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.04)',
      boxShadow: '1px 1px 10px 1px gray',
    },
  },
  select: {
    width: '46vh',
    margin: '2vh',
  },
  text: {
    width: '46vh',
    margin: '2vh',
  },
  button: {
    width: '36vh',
  },
  help: {
    width: '5vh',
    height: '5vh',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  panda: {
    animation: '$panda 20s infinite',
  },
  '@keyframes panda': {
    '0%': {
      opacity: 0,
    },
    '50%': {
      opacity: 1,
      transform: 'scale(1.2)',
    },
    '100%': {
      opacity: 0,
    },
  },
}));

const Occupations = [
  {
    number: 1,
    occupation: 'Student at a College',
  },
  {
    number: 2,
    occupation: 'Some Degree',
  },
  {
    number: 3,
    occupation: 'Working Professional',
  },
];

const Targets = [
  {
    number: 1,
    target: 'GRE',
  },
  {
    number: 2,
    target: 'UPSC',
  },
  {
    number: 3,
    target: 'CAT',
  },
];

const weights = [];

const PersonForm = () => {
  const classes = useStyles();
  const [occupation, setOccupation] = useState();
  const [target, setTarget] = useState();
  const [age, setAge] = useState();
  const [hour, setHour] = useState();
  const [snackOpen, setSnackOpen] = useState(false);
  const [data, setData] = useState();
  const [helpOverlay, setHelpOverlay] = useState(false);
  const SubTitle = styled.h4`
    color: white;
    letter-spacing: 0.2em;
    background: pink;
  `;
  const Title = styled.h1`
    font-size: 2em;
    color: black;
    background: white;
    text-transform: uppercase;
    letter-spacing: 0.2em;
  `;

  const TitleWrapper = styled.section`
    padding: 4em;
    background: papayawhip;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-content: stretch;
    align-items: baseline;
    transition: all ease 0.5s;
    box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, 0.2);
    &:hover {
      transform: translateY(-2vh);
      transition: all ease 0.5s;
    }
  `;

  const handleOccupationChange = e => {
    setOccupation(e.target.value);
  };
  const handleTargetChange = e => {
    setTarget(e.target.value);
  };
  const handleAgeChange = e => {
    setAge(e.target.value);
  };
  const handleHourChange = e => {
    setHour(e.target.value);
  };
  const handleSnackClose = e => {
    setSnackOpen(false);
  };
  const handleFormSubmit = e => {
    e.preventDefault();
    setData({ age, occupation, hour, target });
    setSnackOpen(true);
    console.log(data);
  };
  const toggleHelp = e => {
    e.preventDefault();
    setHelpOverlay(!helpOverlay);
  };

  return (
    <div
      align="center"
      style={{
        backgroundImage: `url(${background})`,
        height: '94vh',
        overflow: 'hidden',
        backgroundSize: 'cover',
        position: 'relative',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        paddingTop: '6vh',
      }}
    >
      <div style={{ display: 'flex' }}>
        <div align="center">
          <div style={{ marginTop: '4vh', marginLeft: '20vh' }}>
            <Container style={{ width: '65vh' }}>
              <TitleWrapper>
                <Title>About You</Title>
                <SubTitle>Your Form.</SubTitle>
              </TitleWrapper>
            </Container>
          </div>
          <div align="center">
            <img
              src={panda}
              alt="lazy panda"
              style={{
                marginTop: '3vh',
                width: '40vh',
                height: '40vh',
                marginLeft: '15vh',
              }}
              className={classes.panda}
            />
          </div>
        </div>
        <Paper className={classes.paper} elevation={4}>
          <Backdrop
            transitionDuration={1000}
            open={helpOverlay}
            onClick={toggleHelp}
            className={classes.backdrop}
          >
            <HelpInfo />
          </Backdrop>
          <div
            style={{
              display: 'flex',
              alignContent: 'center',
              padding: '10px',
              paddingLeft: '26vh',
            }}
          >
            <Tooltip title="You" arrow TransitionComponent={Zoom}>
              <Avatar
                src={vidhu}
                alt="profile"
                variant="circle"
                className={classes.avatar}
              />
            </Tooltip>
            <Tooltip title="Help" arrow TransitionComponent={Zoom}>
              <IconButton
                className={classes.help}
                onClick={toggleHelp}
                style={{ marginTop: '5vh', marginLeft: '5vh' }}
              >
                <HelpIcon />
              </IconButton>
            </Tooltip>
          </div>
          <form onSubmit={handleFormSubmit}>
            <Autocomplete
              getOptionLabel={option => option.occupation}
              options={Occupations}
              renderInput={params => (
                <TextField
                  required
                  {...params}
                  variant="outlined"
                  className={classes.text}
                  label="Occupation"
                  value={occupation}
                  onChange={handleOccupationChange}
                />
              )}
            />
            <Autocomplete
              getOptionLabel={option => option.target}
              options={Targets}
              renderInput={params => (
                <TextField
                  className={classes.text}
                  required
                  {...params}
                  variant="outlined"
                  label="Target Exam"
                  value={target}
                  onChange={target}
                />
              )}
            />
            <TextField
              value={age}
              required
              variant="outlined"
              className={classes.text}
              label="Age"
              onChange={handleAgeChange}
            />
            <TextField
              value={hour}
              variant="outlined"
              className={classes.text}
              label="Hour"
              required
              fullWidth
              onChange={handleHourChange}
            />
            <br />
            <br />
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              className={classes.button}
            >
              Submit
            </Button>
          </form>
          <Snackbar
            open={snackOpen}
            autoHideDuration={3000}
            onClose={handleSnackClose}
          >
            <Alert severity="success" variant="filled">
              Successfully Noted!
            </Alert>
          </Snackbar>
        </Paper>
      </div>
    </div>
  );
};

export default PersonForm;
