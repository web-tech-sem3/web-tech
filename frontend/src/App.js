import React, { useState } from 'react';
import LoginForm from './components/loginForm';
import logo from './images/logo.png';
import background from './images/background.jpg';
import AboutUs from './components/aboutUs'
import HomePage from './components/homepage'

const App = () => {
  const handleLoginForm = () => {
    return;
  };
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        height: '170vh',
        backgroundSize: 'cover',
        
      }}>
        <HomePage/>
    </div>
  );
};

export default App;
