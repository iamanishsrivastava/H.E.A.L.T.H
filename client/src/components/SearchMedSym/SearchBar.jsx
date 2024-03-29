import React from "react";
import "./SearchBar.css";

const SearchBar = ({
  inputValue,
  handleChange,
  handleFocus,
  handleClear,
  setShowFilterMenu,
  showSearchBar,
}) => {
  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          name="search-bar"
          className="search-input"
          placeholder="Medicine/Symptoms?"
          value={inputValue}
          onChange={handleChange}
          onFocus={handleFocus}
        />
        {inputValue && (
          <i
            className="bi bi-x clear-icon"
            aria-hidden="true"
            onClick={handleClear}
          ></i>
        )}
        {showSearchBar && (
          <i
            className="bi bi-filter filter-icon"
            aria-hidden="true"
            onClick={() => {
              setShowFilterMenu((prevState) => !prevState);
            }}
          ></i>
        )}
      </div>
    </>
  );
};

export default SearchBar;
