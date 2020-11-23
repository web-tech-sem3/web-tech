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
import tanmay from '../images/vidhu.jpg';
import TwitterIcon from '@material-ui/icons/Twitter';
import Copyright from './copyright';

const useStyles = makeStyles(theme => ({
  avatar: {
    borderRadius: '100%',
    transition: 'transform .4s ease-in-out',
    '&:hover': {
      boxShadow: '2px 2px 5px 5px grey',
      transform: 'scale(1.1)',
      filter: 'blur(0px)',
    },
  },
  profile: {
    width: '100vh',
    padding: '10%',
    height: '70vh',
    backgroundImage: 'linear-gradient(315deg, #eec0c6 0%, #ecd1d3 74%)',
    transition: 'transform .4s ease-in-out',
    opacity: '80%',
    '&:hover': {
      transform: 'scale(1.04)',
      opacity: '100%',
    },
  },
  label: {
    transition: 'transform .5s',
    filter: 'blur(0.7px)',
    '&:hover': {
      transform: 'italic',
      filter: 'blur(0px)',
      backdropFilter: 'blur(100px)',
    },
  },
}));

const ProfilePage = ({ user }) => {
  const classes = useStyles();
  const username = user ? user.userName : '';
  const name = user ? user.name : '';

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
      </div>
      <Divider
        orientation="vertical"
        style={{ width: '5px', color: 'lightpink' }}
      />
      <div style={{ paddingLeft: '8%', paddingTop: '4%' }}>
        <Paper className={classes.profile} elevation={5}>
          <Typography variant="h3" className={classes.label}>
            Name
            <br />
            <Typography variant="h4">{name}</Typography>
          </Typography>
          <Divider />
          <Typography variant="h3" className={classes.label}>
            Username
            <br />
            <Typography variant="h4">{username}</Typography>
          </Typography>
          <Divider />
          <Typography variant="h3" className={classes.label}>
            Daily Target
            <br /> {user.target}
          </Typography>
        </Paper>
      </div>
    </div>
  );
};

export default ProfilePage;
