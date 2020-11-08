import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutUs from './components/aboutUs';
import HomePage from './components/homepage';
import Dashboard from './components/dashboard';
import LoginForm from './components/loginForm';
import Navbar from './components/navbar';
import SignUpForm from './components/signUpForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import RatingPage from './components/rating';

const App = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(null);
  }, []);

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
        {user ? <Navbar /> : <LoginForm setUser={setUser} />}
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
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <LoginForm />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
