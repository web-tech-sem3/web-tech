import React from 'react';
import { Divider, makeStyles, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  paper: {
    width: '70vh',
    height: '95vh',
    padding: '6vh',
    opacity: '80%',
    display:"flex",
    flexDirection:'column',
    justifyContent:'space-around',
    background: 'white',
    transition: 'all .4s',
    backdropFilter: 'blur(20px)',
    '&:hover': {
      transform: 'scale(1.03)',
    },
  },
  title: {
    transition: 'all .4s',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
});

const HelpInfo = () => {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.paper}>
        <div className={classes.title}>
          <Typography variant="h2">What?</Typography>
          <Typography variant="h6">
            The data from this form helps us gain insights as to how you should
            proceed about you studies
          </Typography>
        </div>
        <Divider style={{ height: '1vh' }} />
        <div className={classes.title}>
          <Typography variant="h2">Why?</Typography>
          <Typography variant="h6">
            This is what you came for isn't it?
          </Typography>
        </div>
        <Divider style={{ height: '1vh' }} />
        <div className={classes.title}>
          <Typography variant="h2" className={classes.title}>
            How?
          </Typography>
          <Typography variant="h6">
            At the heart of it, is a Machine Learning algorithm, that has been
            pretrained for this specific task. This algorithm outputs the number
            of hours we, I mean it, believes you should be studying daily!
          </Typography>
        </div>
      </Paper>
    </div>
  );
};

export default HelpInfo;
