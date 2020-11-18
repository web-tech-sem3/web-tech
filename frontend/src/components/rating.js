import React from 'react';
import Card from '@material-ui/core/Card';
import RatingStar from './ratingStar';
import { makeStyles } from '@material-ui/core/styles';
import Copyright from '../components/copyright';
import background from '../images/background.jpg';
import '../App.css';

const useStyles = makeStyles({
  root: {
    width: 400,
    paddingTop: 20,
    height: 100,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    alignContent: 'center',
    align: 'center',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  pos: {
    marginBottom: 12,
  },
  copyright: {
    paddingTop: 50,
    height: 90,
    alignContent: 'center',
    position: 'bottom',
  },
});

const Rating = () => {
  const classes = useStyles();
  return (
    <div align="center">
      <div
        align="center"
        style={{
          backgroundImage: `url(${background})`,
          height: '83vh',
          backgroundSize: 'cover',
          paddingLeft: 700,
          position: 'relative',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <br />
        <br />
        <br />
        <Card className={classes.root}>
          Customer Care
          <RatingStar num={1} />
        </Card>
        <br />
        <Card className={classes.root}>
          Caring
          <RatingStar num={2} />
        </Card>
        <br />
        <Card className={classes.root}>
          UX
          <RatingStar num={3} />
        </Card>
        <br />
        <Card className={classes.root}>
          UI
          <RatingStar num={4} />
        </Card>
        <br />
        <br />
        <br />
      </div>
      <br />
      <Copyright />
    </div>
  );
};

export default Rating;
