import { Avatar, Divider, makeStyles } from '@material-ui/core';
import React from 'react';
import arvind from '../images/arvind.jpg';
import background from '../images/background.jpg';
import SettingsAccordion from './settingsAccordion';

const useStyles = makeStyles({
  avatar: {
    width: '300px',
    height: '300px',
    borderRadius: '100%',
    margin: '7vh',
    transition: 'transform .3s ease-in-out',
    '&:hover': {
      boxShadow: '1px 1px 20px grey',
      transform: 'scale(1.06)',
    },
  },
  accordion: {
    width: '100%',
    marginTop: '10%',
    height: '40vh',
    marginRight: '5vh',
  },
});

const SettingsPage = () => {
  const classes = useStyles();
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        height: '94vh',
        backgroundSize: 'cover',
        position: 'relative',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
      }}
    >
      <Avatar className={classes.avatar} src={arvind} />
      <Divider orientation="vertical" style={{ width: '1vh' }} />

      <div style={{ paddingLeft: '5vh' }} className={classes.accordion}>
        <SettingsAccordion />
      </div>
    </div>
  );
};

export default SettingsPage;
