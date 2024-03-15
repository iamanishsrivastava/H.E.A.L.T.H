import "./Email.css";
import React, { useState } from "react";

const Email = () => {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState("true");
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    // Regular expression for validating email format
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,}$/;
    const isValidEmail = emailRegex.test(email);
    setEmailValid(isValidEmail);
  };

  return (
    <>
      <div className={`email ${isFocused || email ? "focused" : ""} ${emailValid ? "" : "not-valid"}`}>
        <i
          className={`bi ${emailValid ? "bi-envelope-fill" : "bi-envelope"}`}
        ></i>
        <input
          type="email"
          name="email"
          autoComplete="email"
          value={email}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <div className={`placeholder ${isFocused || email ? "focused" : ""} ${emailValid ? "" : "not-valid"}`}>
          Email
        </div>
      </div>
      {email && !emailValid && !isFocused && (
        <div className="warn">
          <i className="bi bi-exclamation-triangle-fill"></i>Invalid email.
        </div>
      )}
    </>
  );
};

export default Email;
