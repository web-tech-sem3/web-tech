import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useSpring, animated as a } from 'react-spring';

const RenameFlipCard = () => {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  const handleNameSubmit = e => {};
  return (
    <div
      onClick={() => set(state => !state)}
      style={{
        padding: '50vh',
        height: '20vh',
        width: '50vh',
      }}
    >
      <a.div
        style={{
          opacity: opacity.interpolate(o => 1 - o),
          transform,
          background: 'orange',
        }}
      >
        Change Name
      </a.div>
      <a.div
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`),
          background: 'red',
        }}
      >
        <form type="submit" onSubmit={handleNameSubmit}>
          <TextField label="New Name" required fullWidth />
          <Button variant="filled" type="submit">
            Rename
          </Button>
        </form>
      </a.div>
    </div>
  );
};

export default RenameFlipCard;
