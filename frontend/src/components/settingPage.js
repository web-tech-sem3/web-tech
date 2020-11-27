import React from 'react';
import background from '../images/background.jpg';
import RenameFlipCard from './renameFlipCard';

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
      <RenameFlipCard />
    </div>
  );
};

export default SettingsPage;
