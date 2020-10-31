import React from 'react';
import '../styles/signUpForm.css'

const SignUpForm = () => {
  return (
    <div id="container">
      <div id="FormWrap">
        <div id="FormImage">
          <img />
        </div>
        <div id="form">
          <h1 id='Heading'>Create Account</h1>
          <form action="">
            <input type="text" placeholder="Enter your name" />
            <input type="date" placeholder="Enter your DOB" />
            <input type="email" placeholder="Enter your email" />

            <input type="password" placeholder="Choose your password" />
            <input type="password" placeholder="Confirm your password" />
            <div className="buttons">
              <div className="container">
                <a href="" className="btn effect01" target="_blank" >
                  <span>SignUp</span>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
      <h1 id="SignUpIntro">
        Start your path to success. <br />
        SignUp to start now.
      </h1>
    </div>
  );
};

export default SignUpForm;
