import React from 'react';
import Card from '@material-ui/core/Card';
import RatingStar from './ratingStar';
import { makeStyles } from '@material-ui/core/styles';
import Copyright from '../components/copyright';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 350,
    paddingTop: 20,
    height: 100,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    alignContent: 'center',
    align: 'center',
    transition: 'all .25s linear',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  pos: {
    marginBottom: 12,
  },
  copyright: {
    height: 100,
    alignContent: 'center',
    position: 'bottom',
  },
});

const Rating = () => {
  const classes = useStyles();
  return (
    <div align="center">
      <br />
      <Typography variant="h2">Rating Page</Typography>
      <br />
      <Card className={classes.root}>
        Customer Care
        <RatingStar />
      </Card>
      <br />
      <Card className={classes.root}>
        Caring
        <RatingStar />
      </Card>
      <br />
      <Card className={classes.root}>
        UX
        <RatingStar />
      </Card>
      <br />
      <Card className={classes.root}>
        UI
        <RatingStar />
      </Card>
      <br />
      <Card className={classes.copyright}>
        <Copyright />
      </Card>
    </div>
  );
};

export default Rating;
