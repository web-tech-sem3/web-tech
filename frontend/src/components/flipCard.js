import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { useSpring, animated as a } from 'react-spring';

const useStyles = makeStyles({
  div: { width: '100vh', align: 'center', padding: '10%' },
});

function FlipCard({ color, name, util }) {
  const classes = useStyles();
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <div onClick={() => set(state => !state)} className={classes.div}>
      <a.div style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
        {name}
      </a.div>
      <a.div
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`),
          background: color,
        }}
      >
        hello back
      </a.div>
    </div>
  );
}
export default FlipCard;
