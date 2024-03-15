import "./Password.css";
import React, { useState } from "react";

const Password = () => {
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(true);
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "password") {
      setPassword(value);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setPasswordValid(password.length >= 6);
  };

  return (
    <>
      <div
        className={`pass ${isFocused || password ? "focused" : ""} ${
          passwordValid ? "" : "not-valid"
        }`}
      >
        <i className={`bi ${passwordValid ? "bi-key-fill" : "bi-key"}`}></i>
        <input
          type="password"
          name="password"
          autoComplete="current-password"
          value={password}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <div
          className={`placeholder ${isFocused || password ? "focused" : ""} ${
            passwordValid ? "" : "not-valid"
          }`}
        >
          Password
        </div>
      </div>
      {!isFocused && !passwordValid && password && (
        <div className="warn">
          <i className="bi bi-exclamation-triangle-fill"></i>Invalid password.
        </div>
      )}
    </>
  );
};

export default Password;
