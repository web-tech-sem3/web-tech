import {
  Avatar,
  Card,
  Divider,
  IconButton,
  makeStyles,
  Paper,
  Tooltip,
  Typography,
  Zoom,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import background from '../images/background.jpg';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import leftArrow from '../images/left-arrow-sketch.svg';
import tanmay from '../images/arvind.jpg';
import TwitterIcon from '@material-ui/icons/Twitter';
import SpringCard from './springCard';
import SettingsAccordion from './settingsAccordion';

const useStyles = makeStyles(theme => ({
  avatar: {
    borderRadius: '100%',
    transition: 'transform .2s ease-in-out',
    '&:hover': {
      boxShadow: '1px 1px 20px grey',
      transform: 'scale(1.1)',
    },
  },
  arrow: {
    width: '35vh',
    height: '35vh',
    transform: 'rotate(20deg)',
    marginLeft: '-15vh',
    transition: 'all .1s',
    '&:hover': {
      transform: 'scale(1.05) rotate(20deg)',
    },
    marginTop: '30vh',
    opacity: '70%',
  },
  you: {
    marginTop: '70vh',
    fontFamily: 'Gloria Hallelujah, cursive',
    transform: 'rotate(10deg)',
    opacity: '90%',
    transition: 'all .1s',
    marginLeft: '-27vh',
    '&:hover': {
      transform: 'rotate(0deg)',
      opacity: '100%',
    },
  },
  profile: {
    width: '90vh',
    padding: '10%',
    height: '60vh',
    backgroundImage: 'linear-gradient(315deg, #eec0c6 0%, #ecd1d3 74%)',
    transition: 'transform .4s ease-in-out',
    opacity: '80%',
    '&:hover': {
      transform: 'scale(1.04)',
      opacity: '90%',
    },
  },
  label: {
    transition: 'transform .5s',
    '&:hover': {
      transform: 'scale(1.03)',
    },
  },
}));

const Helper = ({ title, subtitle }) => {
  const classes = useStyles();
  return (
    <Typography variant="h3" className={classes.label}>
      <i>{title}</i>
      <br />
      <Typography variant="h4">{subtitle}</Typography>
    </Typography>
  );
};

const SettingsPage = ({ user }) => {
  const classes = useStyles();
  const username = user ? user.userName : '';
  const name = user ? user.name : '';
  console.log(user);
  const target = user ? user.target : '';

  return (
    <div
      style={{
        background: `url(${background})`,
        overflow: 'hidden',
        display: 'flex',
        height: '94.3vh',
        backgroundSize: 'cover',
        position: 'relative',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div style={{ padding: '5%' }}>
        <Tooltip title="Profile Picture" arrow TransitionComponent={Zoom}>
          <div className={classes.avatar}>
            <Avatar
              alt="profile-pic"
              style={{
                width: '300px',
                height: '300px',
              }}
              src={tanmay}
            />
          </div>
        </Tooltip>
        <br />
        <br />
        <div style={{ display: 'flex', paddingLeft: '50px' }}>
          <Tooltip TransitionComponent={Zoom} title="Github" arrow>
            <a href="https://github.com">
              <IconButton>
                <GitHubIcon style={{ width: '40px', height: '40px' }} />
              </IconButton>
            </a>
          </Tooltip>
          <a href={null}>
            <Tooltip TransitionComponent={Zoom} title="Twitter" arrow>
              <IconButton disabled>
                <TwitterIcon style={{ width: '40px', height: '40px' }} />
              </IconButton>
            </Tooltip>
          </a>
          <a href="mailto:tanmay@gmail.com">
            <Tooltip TransitionComponent={Zoom} title="Mail" arrow>
              <IconButton>
                <MailIcon style={{ width: '40px', height: '40px' }} />
              </IconButton>
            </Tooltip>
          </a>
        </div>
        <br />
        <Typography variant="h5" align="center" style={{ opacity: '80%' }}>
          User since <b>25</b> days
        </Typography>
      </div>
      <img src={leftArrow} className={classes.arrow} />
      <Typography variant="h5" className={classes.you}>
        Yeah, that's you
      </Typography>
      <Divider
        orientation="vertical"
        style={{ width: '5px', color: 'lightpink' }}
      />
      <div style={{ padding: '2%', paddingTop: '10%' }}>
        <SettingsAccordion />
      </div>
    </div>
  );
};

export default SettingsPage;
