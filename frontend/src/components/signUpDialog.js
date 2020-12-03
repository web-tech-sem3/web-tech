import React from 'react';
import chatBubble from '../images/chat-bubble.svg';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    textAlign: 'center',
    position: 'absolute',
    marginTop: '-13vh',
    marginLeft: '-18vh',
  },
  dialog: {
    width: '20vh',
    height: '20vh',
    marginLeft: '-20vh',
    marginTop: '10vh',
    opacity: '60%',
  },
  text: {
    fontFamily: 'Gloria Hallelujah, cursive',
    opacity: '80%',
  },
});

const SignUpDialog = () => {
  const classes = useStyles();
  return (
    <div>
      <img src={chatBubble} alt="monke dialog" className={classes.dialog} />
      <div className={classes.container}>
        <Typography variant="h6" className={classes.text}>
          Hewwo Ji!
        </Typography>
      </div>
    </div>
  );
};

export default SignUpDialog;
