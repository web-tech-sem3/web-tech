import { Divider } from '@material-ui/core';
import React from 'react';
import background from '../images/background.jpg';
import SettingsAccordion from './settingsAccordion';

const SettingsPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        height: '100vh',
        backgroundSize: 'cover',
        position: 'relative',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div style={{ paddingTop: '10vh' }}>
        <Divider orientation="vertical" />
        <SettingsAccordion />
      </div>
    </div>
  );
};

export default SettingsPage;
