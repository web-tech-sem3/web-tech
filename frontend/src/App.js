import React from 'react';
import HomePage from './components/homepage';
import LoginForm from './components/loginForm';
import loginImage from './'
import logo from './images/logo.png'
import './styles/main.css'
import './styles/util.css'

const App = () => {
  const handleLoginForm = ()=>  {
    return
  }

  return (
    <div align='center'>
      <HomePage/>
      <span></span>
      <img src={logo} align='center' class='img'/>
      <LoginForm />
    </div>
  );
};

export default App;
