import { Tooltip, Typography, Zoom } from '@material-ui/core';
import React from 'react';
import { useSpring, animated } from 'react-spring';
import '../styles/targetDisplay.css'; // // Icons made by Freepik from www.flaticon.com

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;

const TargetDisplay = ({ target }) => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  return (
    <div
      class="container"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      style={{ marginTop: '20vh', marginLeft: '-2vh' }}
    >
      <animated.div
        class="card1"
        style={{ transform: props.xy.interpolate(trans1) }}
      />
      <animated.div
        class="card3"
        style={{ transform: props.xy.interpolate(trans3) }}
      />
      <Tooltip title="Target" arrow TransitionComponent={Zoom}>
        <animated.div style={{ transform: props.xy.interpolate(trans2) }}>
          <Typography
            variant="h2"
            style={{
              opacity: '80%',
              marginLeft: '3vh',
              marginBottom: '2vh',
              fontFamily: 'Gloria Hallelujah, cursive',
            }}
          >
            {`${target} hours`}
          </Typography>
        </animated.div>
      </Tooltip>
    </div>
  );
};

export default TargetDisplay;
