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
    setUser(window.localStorage.getItem('userLoggedIn'));
  }, []);

  const handleLogin = async event => {
    event.preventDefault();
    try {
      const User = await loginService.login({
        userName: username,
        password,
      });

      console.log('Logged in Successfully');
      console.log(User);
      setUser(User);
      window.localStorage.setItem('userLoggedIn', JSON.stringify(User));
      setUsername('');
      setPassword('');
    } catch (exception) {
      console.log(exception);
      window.alert('wrong username or password');
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
        {user ? <Navbar setUser={setUser} username={user.name} /> : null}
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
            {!user ? (
              <LoginForm
                handleLogin={handleLogin}
                handleUsernameChange={handleUsernameChange}
                username={username}
                password={password}
                handlePasswordChange={handlePasswordChange}
              />
            ) : (
              <HomePage />
            )}
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
