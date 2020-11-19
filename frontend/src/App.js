import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutUs from './components/aboutUs';
import HomePage from './components/homepage';
import Dashboard from './components/dashboard';
import PersonForm from './components/personForm';
import loginService from './services/login';
import LoginForm from './components/loginForm';
import Navbar from './components/navbar';
import SignUpForm from './components/signUpForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import RatingPage from './components/rating';

const App = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const User = window.localStorage.getItem('userLoggedIn');
    if (User) {
      const user = JSON.parse(User);
      setUser(user);
    }
  }, []);

  const handleLogin = async event => {
    event.preventDefault();
    try {
      const User = await loginService
        .login({
          username,
          password,
        })
        .catch(err => {
          setError(`Wrong Username or Password`);
          setTimeout(() => setError(null), 3000);
          setUsername('');
          setPassword('');
        });
      console.log('Logged in Successfully');
      setUser(User);
      window.localStorage.setItem('userLoggedIn', JSON.stringify(User));
      setUsername('');
      setPassword('');
    } catch (exception) {
      console.log(exception);
    }
  };

  const handleUsernameChange = event => {
    event.preventDefault();
    setUsername(event.target.value);
  };

  const handlePasswordChange = event => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  return (
    <div>
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
          <Route path="/you">
            <PersonForm />
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
            <LoginForm
              handleLogin={handleLogin}
              handleUsernameChange={handleUsernameChange}
              handlePasswordChange={handlePasswordChange}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
