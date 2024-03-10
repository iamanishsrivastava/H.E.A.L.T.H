import React, { useState } from "react";
import "./SignUp.css";
import Logo from "./Logo";

const SignUp = () => {
  const [accountType, setAccountType] = useState("individual");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleChange = (e) => {
    // Handle form input changes
  };

  return (
    <>
      <div className="sign-up-container">
        <form className="form" onSubmit={handleSubmit}>
          
          <h1 className="title">Log In <Logo/></h1>
          <div className="account-type">
            <label className={accountType === "individual" ? "selected" : ""}>
              <input
                type="radio"
                value="individual"
                checked={accountType === "individual"}
                onChange={() => setAccountType("individual")}
              />
              Individual
            </label>
            <label className={accountType === "healthcare" ? "selected" : ""}>
              <input
                type="radio"
                value="healthcare"
                checked={accountType === "healthcare"}
                onChange={() => setAccountType("healthcare")}
              />
              Healthcare Services
            </label>
          </div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            autoComplete="email"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            autoComplete="current-password"
            onChange={handleChange}
          />
          <button type="submit" className="submit">
            Log In
          </button>
        </form>
        <div className="register-link">
          <p>
            Don't have an account? <a href="#">Register</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
