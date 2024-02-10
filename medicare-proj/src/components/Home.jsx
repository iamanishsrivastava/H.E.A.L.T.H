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

// Define the quickSort function
const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name < pivot.name) {
      left.push(arr[i]);
    } else if (arr[i].name > pivot.name) {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [filterOption, setFilterOption] = useState(null);
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [sortText, setSortText] = useState(""); // State for displaying text on sort icon hover
  const [filteredAndSortedDatabase, setFilteredAndSortedDatabase] = useState([]);

  const filterMenuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      filterMenuRef.current &&
      !filterMenuRef.current.contains(event.target) &&
      !event.target.classList.contains("filter-icon")
    ) {
      setShowFilterMenu(false);
    }
  
    // Close the sort menu when a click occurs outside of it
    setShowSortMenu(false);
  };  

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Apply search filter to the unsorted database
    const filteredDatabase = database.filter((item) =>
      item.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    // Apply sorting logic if a filter option is selected
    let sortedDatabase = [...filteredDatabase];
    if (filterOption === "Ascending") {
      sortedDatabase = quickSort(sortedDatabase);
    } else if (filterOption === "Descending") {
      sortedDatabase = quickSort(sortedDatabase).reverse();
    } else if (filterOption === "Popularity") {
      // Implement your custom sorting logic here
    } else if (filterOption === "Relevance") {
      // Implement your custom sorting logic here
    }

    setFilteredAndSortedDatabase(sortedDatabase);
  }, [inputValue, filterOption]);

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
    setFilterOption(option);
  };

  const renderSortOption = (iconClass, text, option) => (
    <div
      key={option}
      className="sort-menu-item"
      onClick={() => handleFilterOption(option)}
      onMouseOver={() => setSortText(text)}
      onMouseLeave={() => setSortText("")}
    >
      <i className={`bi ${iconClass}`}></i>{" "}
      {/* {sortText} */}
    </div>
  );

  const renderSortOptions = () => (
    <div className="sort-menu">
      {renderSortOption("bi-sort-alpha-up", "Descending (Z-A)", "Descending")}
      {renderSortOption("bi-sort-alpha-down", "Ascending (A-Z)", "Ascending")}
      {renderSortOption("bi-heart-fill", "Popularity", "Popularity")}
      {renderSortOption("bi-star-fill", "Relevance", "Relevance")}
    </div>
  );
  
  return (
    <div className={`home ${showFilterMenu ? 'filter-menu-visible' : ''}`}>
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
                setShowFilterMenu(prevState => !prevState);
                setShowSortMenu(false);
              }}
            ></i>
          )}
        </div>

        {showFilterMenu && (
          <div className={`filter-menu ${showFilterMenu ? 'visible' : ''}`} ref={filterMenuRef}>
            {renderSortOptions()}
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
        <div className={`suggest-item-list-container ${showFilterMenu ? 'visible' : ''}`}>
          <div className="suggest-item-list">
            {filteredAndSortedDatabase.map((item, index) => (
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