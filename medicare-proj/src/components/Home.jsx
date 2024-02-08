import React, { useState, useRef, useEffect } from "react";
import "./Home.css";

const database = [
  { name: "Paracetamol", category: "Medicine" },
  { name: "Ibuprofen", category: "Medicine" },
  { name: "Aspirin", category: "Medicine" },
  { name: "Headache", category: "Symptom" },
  { name: "Fever", category: "Symptom" },
  { name: "Cough", category: "Symptom" },
];

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [filterOption, setFilterOption] = useState(null);
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [sortText, setSortText] = useState(""); // State for displaying text on sort icon hover

  const filterMenuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      filterMenuRef.current &&
      !filterMenuRef.current.contains(event.target)
    ) {
      setShowFilterMenu(false);
      setShowSortMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChange = (event) => {
    setInputValue(event.target.value);
    setShowSearchBar(true);
  };

  const handleFocus = () => {
    setShowSearchBar(true);
    const searchContainer = document.querySelector(".search-container");
    if (searchContainer) {
      searchContainer.classList.add("focused");
    }
  };

  const handleClear = () => {
    setInputValue("");
  };

  const handleFilterOption = (option) => {
    if (option === "Ascending") {
      database.sort((a, b) => a.name.localeCompare(b.name));
    } else if (option === "Descending") {
      database.sort((a, b) => b.name.localeCompare(a.name));
    } else if (option === "Popularity") {
      // Implement your custom sorting logic here
    } else if (option === "Relevance") {
      // Implement your custom sorting logic here
    } else {
      setFilterOption(option);
    }
    setShowFilterMenu(false);
  };

  const handleSortOption = (option) => {
    handleFilterOption(option);
  };

  const renderSortOption = (iconClass, text, option) => (
    <div
      key={option}
      className="sort-menu-item"
      onClick={() => handleSortOption(option)}
      onMouseOver={() => setSortText(text)}
      onMouseLeave={() => setSortText("")}
    >
      <i className={`bi ${iconClass}`}></i>{" "}
      {sortText}
    </div>
  );

  const renderSortOptions = () => (
    <div className="sort-menu">
      {renderSortOption("bi-sort-alpha-up", "Ascending (A-Z)", "Ascending")}
      {renderSortOption("bi-sort-alpha-down", "Descending (Z-A)", "Descending")}
      {renderSortOption("bi-heart-fill", "Popularity", "Popularity")}
      {renderSortOption("bi-star-fill", "Relevance", "Relevance")}
    </div>
  );
  
  return (
    <div className="home">
      <div
        className={`search-container gap-1 ${showSearchBar ? "focused" : ""}`}
      >
        <div className="search-info">
          {!showSearchBar && (
            <div className="transition-info">
              info about
              <br />
              medicines/symptoms?
            </div>
          )}
          {showSearchBar && (
            <div className="med-sym">
              <br />
              medicine/symptoms?
            </div>
          )}
        </div>

        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Type here to search"
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
                setShowFilterMenu(!showFilterMenu);
                setShowSortMenu(false);
              }}
            ></i>
          )}
        </div>

        {showFilterMenu && (
          <div className="filter-menu" ref={filterMenuRef}>
            {showSortMenu && renderSortOptions()}
            <div className="filtersort-separator-line"></div>
            <div id="filter-menu-item" onClick={() => handleFilterOption(null)}>
              All
            </div>
            <div
              id="filter-menu-item"
              onClick={() => handleFilterOption("Medicine")}
            >
              Medicine
            </div>
            <div
              id="filter-menu-item"
              onClick={() => handleFilterOption("Symptom")}
            >
              Symptom
            </div>
          </div>
        )}

        <div className="separator-line"></div>

        {showSearchBar && inputValue && (
          <div className="suggest-item-list-container">
            <div className="suggest-item-list">
              {database
                .filter((item) =>
                  item.name.toLowerCase().includes(inputValue.toLowerCase())
                )
                .filter(
                  (item) => !filterOption || item.category === filterOption
                )
                .map((item, index) => (
                  <div className="suggest-item" key={index}>
                    {item.name}
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
