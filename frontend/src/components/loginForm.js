import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import balsamiqBold from "../fonts/balsamiq/BalsamiqSans-Bold.ttf";
// import '../styles/loginform.css';
import Css from "../styles/loginform.module.css";
import loginService from "../services/login";
import img from "../images/Login.jpg";
import form from "../styles/Loginform2.module.css";

const LoginForm = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    const obj = {
      userName: username,
      password: password,
    };
    try {
      const val = await loginService.login(obj);
      setToken(val.token);
    } catch (e) {
      setError("Wrong Username or Password");
      console.log(error);
    }
  };

  const handleUsernameChange = (event) => {
    event.preventDefault();
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  return (
    <div className={Css.body}>
      <div className={Css.container}>
        <div className={Css.Wall}>
          <img src={img}></img>
        </div>
        <div className={Css.form}>
          <div className={Css.formContainer}>
            <div className={form.loginbox}>
              <h2>Login</h2>
              <form>
                <div className={form.userbox}>
                  <input type="text" name="" required=""></input>
                  <label>Username</label>
                </div>
                <div className={form.userbox}>
                  <input type="password" name="" required=""></input>
                  <label>Password</label>
                </div>
                <a href="#">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Submit
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
