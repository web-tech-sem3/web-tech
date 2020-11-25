import React from 'react';
import FlipCard from './flipCard';
import background from '../images/background.jpg';

const SettingsPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        height: '130vh',
        backgroundSize: 'cover',
        position: 'relative',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <FlipCard />
    </div>
  );
};

export default SettingsPage;
