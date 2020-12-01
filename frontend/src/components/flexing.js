import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  flex: {
    transition: 'all .1s',
    '&:hover': {
      color: 'lightpink',
      transform: 'scale(1.3)',
    },
  },
});

const Flexing = props => {
  const classes = useStyles();
  console.log(props.children.split());
  return (
    <div style={{ display: 'flex' }}>
      {props.children.split('').map(c => (
        <Typography variant="h1" className={classes.flex}>
          {c}
        </Typography>
      ))}
    </div>
  );
};

export default Flexing;
