import React from "react";
import { Link } from "react-router-dom";

import Logo from "./Logo";
import AccountType from "./AccountType";
import Email from "./Email";
import Password from "./Password";
import Name from "./Name";
import "./Register.css";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Register button clicked");
  };

  return (
    <div className="register-container">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="title">
          Register <Logo />
        </h1>
        <AccountType />
        <Name />
        <Email />
        <Password />
        <button type="submit" className="submit" onClick={handleSubmit}>
          Register
        </button>
        <div className="line-hr">
          <p className="line"></p>
          or
          <p className="line"></p>
        </div>

        {/* <script src="https://apis.google.com/js/platform.js" async defer></script> */}

        <div className="register-link">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
