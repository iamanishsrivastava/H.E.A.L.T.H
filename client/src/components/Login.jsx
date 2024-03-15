import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import Logo from "./Logo";
import Email from "./Email";
import Password from "./Password";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Login button clicked");
  };

  return (
    <>
      <div className="login-container">
        <form className="form" onSubmit={handleSubmit}>
          <h1 className="title">
            Login <Logo />
          </h1>
          <Email />
          <Password />
          <div className="rem-for-container">
            <label className="rem-container">
              <input type="checkbox" value="remember" /> Remember Me
            </label>
            <a href="http://" className="for-container">
              Forgot Password?
            </a>
          </div>
          <button type="submit" className="submit" onClick={handleSubmit}>
            Login
          </button>
          <div className="line-hr">
            <p className="line"></p>
            or
            <p className="line"></p>
          </div>

          {/* <script src="https://apis.google.com/js/platform.js" async defer></script> */}

          <Link to="/register" className="register-link">
            Don't have an account? <a href="#">Register</a>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Login;
