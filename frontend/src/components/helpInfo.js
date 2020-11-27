import React from 'react';
import { makeStyles, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  paper: {
    width: '70vh',
    height: '95vh',
    background: 'white',
  },
});

const HelpInfo = () => {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.paper}>
        <Typography variant="h2">What?</Typography>
        <Typography variant="h5">Lorem Ipsum bc</Typography>
        <Typography variant="h2">Why?</Typography>
        <Typography variant="h5">Le Lorem Ipsum bc</Typography>
        <Typography variant="h2">How?</Typography>
        <Typography variant="h5">Firse Lorem Ipsum bc</Typography>
      </Paper>
    </div>
  );
};

export default HelpInfo;
