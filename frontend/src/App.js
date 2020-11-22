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
import ProfilePage from './components/profilePage';
import SettingsPage from './components/settings';

const App = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem('userLoggedIn')));
  }, []);

  const handleLogin = async event => {
    event.preventDefault();
    try {
      const User = await loginService.login({
        userName: username,
        password,
      });
      setUser(User);
      window.localStorage.setItem('userLoggedIn', JSON.stringify(User));
      setUsername('');
      setPassword('');
    } catch (exception) {
      window.alert('Wrong username or password');
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
        {user ? <Navbar setUser={setUser} user={user} /> : null}
        <Switch>
          <Route path="/rate">
            {!user ? (
              <LoginForm
                handleLogin={handleLogin}
                handleUsernameChange={handleUsernameChange}
                username={username}
                password={password}
                handlePasswordChange={handlePasswordChange}
              />
            ) : (
              <RatingPage />
            )}
          </Route>
          <Route path="/settings">
            {!user ? (
              <LoginForm
                handleLogin={handleLogin}
                handleUsernameChange={handleUsernameChange}
                username={username}
                password={password}
                handlePasswordChange={handlePasswordChange}
              />
            ) : (
              <SettingsPage />
            )}
          </Route>
          <Route path="/profile">
            {!user ? (
              <LoginForm
                handleLogin={handleLogin}
                handleUsernameChange={handleUsernameChange}
                username={username}
                password={password}
                handlePasswordChange={handlePasswordChange}
              />
            ) : (
              <ProfilePage user={user} />
            )}
          </Route>
          <Route path="/about">
            {!user ? (
              <LoginForm
                handleLogin={handleLogin}
                handleUsernameChange={handleUsernameChange}
                username={username}
                password={password}
                handlePasswordChange={handlePasswordChange}
              />
            ) : (
              <AboutUs />
            )}{' '}
          </Route>
          <Route path="/you">
            {!user ? (
              <LoginForm
                handleLogin={handleLogin}
                handleUsernameChange={handleUsernameChange}
                username={username}
                password={password}
                handlePasswordChange={handlePasswordChange}
              />
            ) : (
              <PersonForm />
            )}
          </Route>
          <Route path="/signup">
            <SignUpForm />
          </Route>
          <Route path="/home">
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
          <Route path="/dashboard">
            {!user ? (
              <LoginForm
                handleLogin={handleLogin}
                handleUsernameChange={handleUsernameChange}
                username={username}
                password={password}
                handlePasswordChange={handlePasswordChange}
              />
            ) : (
              <Dashboard />
            )}
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
