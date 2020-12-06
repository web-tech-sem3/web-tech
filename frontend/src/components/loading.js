import { makeStyles } from '@material-ui/core';
import React from 'react';
import loading from '../images/loading.gif';

const useStyles = makeStyles({
  loading: {
    animation: '$fade 4.2s',
  },
  '@keyframes fade': {
    '0%': {
      opacity: 0,
    },
    '50%': {
      opacity: 1,
    },
    '100%': {
      opacity: 0,
    },
  },
});

const Loading = () => {
  const classes = useStyles();
  return (
    <div
      style={{ paddingLeft: '18%' }}
      align="center"
      className={classes.loading}
    >
      <img src={loading} alt="loading" />
    </div>
  );
};
export default Loading;
