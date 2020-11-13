import React from 'react';
import Card from '@material-ui/core/Card';
import RatingStar from './ratingStar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
    paddingTop: 30,
    height: 100,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    alignContent: 'center',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  pos: {
    marginBottom: 12,
  },
});

const Rating = () => {
  const classes = useStyles();
  return (
    <div align="center">
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
    </div>
  );
};

export default Rating;
