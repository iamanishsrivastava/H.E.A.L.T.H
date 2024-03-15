import React, { useState } from 'react';
import './Name.css';

const Name = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (!inputValue) {
      setIsFocused(false);
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value) {
      setIsFocused(true);
    } else {
      setIsFocused(false);
    }
  };

  return (
    <div className="name">
      <i className="bi bi-person"></i>
      <input
        type="text"
        name="name"
        value={inputValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <div className={`placeholder ${isFocused ? 'focused' : ''}`}>Name</div>
    </div>
  );
};

export default Name;