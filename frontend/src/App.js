import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutUs from './components/aboutUs';
import HomePage from './components/homepage';
import Dashboard from './components/dashboard';
import LoginForm from './components/loginForm';
import Navbar from './components/navbar';
import SignUpForm from './components/signUpForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import background from './images/background.jpg';
import RatingPage from './components/ratingStar';

const App = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(null);
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        height: '170vh',
        backgroundSize: 'cover',
        position: 'relative',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Router>
        {user ? <Navbar setUser={setUser} /> : null}
        <Switch>
          <Route path="/rate">
            <RatingPage />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/signup">
            <SignUpForm />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <LoginForm setUser={setUser} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
