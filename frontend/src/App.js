import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutUs from './components/aboutUs';
import HomePage from './components/homepage';
import Dashboard from './components/dashboard';
import LoginForm from './components/loginForm';
import Navbar from './components/navbar';
import SignUpForm from './components/signUpForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div
    // style={{
    //   backgroundImage: `url(${background})`,
    //   height: '170vh',
    //   backgroundSize: 'cover',
    //   position: 'relative',
    // }}
    >
      <Router>
        <Navbar />
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/signup">
            <SignUpForm />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
