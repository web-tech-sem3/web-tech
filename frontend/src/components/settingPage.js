import { Avatar, Divider, makeStyles } from '@material-ui/core';
import React from 'react';
import background from '../images/background.jpg';
import SettingsAccordion from './settingsAccordion';

const useStyles = makeStyles({
  avatar: {
    width: '50vh',
    height: '50vh',
    margin: '7vh',
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
      <Avatar className={classes.avatar} />
      <Divider orientation="vertical" style={{ width: '1vh' }} />

      <div style={{ paddingLeft: '5vh' }} className={classes.accordion}>
        <SettingsAccordion />
      </div>
    </div>
  );
};

export default SettingsPage;
