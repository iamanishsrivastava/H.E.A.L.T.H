import React, { useState, useRef, useEffect } from "react";
import "./Home.css";

// Simple database of medicine and symptoms
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
  const [showFilterMenu, setShowFilterMenu] = useState(false); // Add state for the filter menu
  const [filterOption, setFilterOption] = useState(null);
  const [showSortMenu, setShowSortMenu] = useState(false); // Add state for the sorting options menu

  // Ref for the filter menu
  const filterMenuRef = useRef(null);

  // Handle clicks outside the filter menu to close it
  const handleClickOutside = (event) => {
    if (
      filterMenuRef.current &&
      !filterMenuRef.current.contains(event.target)
    ) {
      setShowFilterMenu(false);
      setShowSortMenu(false); // Close the sorting options menu as well
    }
  };

  // Add event listener on mount to handle clicks outside the filter menu
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle input change
  const handleChange = (event) => {
    setInputValue(event.target.value);
    setShowSearchBar(true); // Show search bar when input value changes
  };

  // Handle input field focus
  const handleFocus = () => {
    setShowSearchBar(true);
    // Move the search bar up immediately upon focusing
    const searchContainer = document.querySelector(".search-container");
    if (searchContainer) {
      searchContainer.classList.add("focused");
    }
  };

  // Handle clearing input value
  const handleClear = () => {
    setInputValue("");
  };

  // Handle filter option selection and sorting
  const handleFilterOption = (option) => {
    if (option === "Ascending") {
      // Sort alphabetically in ascending order
      database.sort((a, b) => a.name.localeCompare(b.name));
    } else if (option === "Descending") {
      // Sort alphabetically in descending order
      database.sort((a, b) => b.name.localeCompare(a.name));
    } else if (option === "Popularity") {
      // Sort by popularity (example)
      // Implement your custom sorting logic here
    } else if (option === "Relevance") {
      // Sort by relevance (example)
      // Implement your custom sorting logic here
    } else {
      // Filter by category
      setFilterOption(option);
    }
    setShowFilterMenu(false); // Close the filter menu after an option is selected
  };

  // Handle sorting option selection
  const handleSortOption = (option) => {
    handleFilterOption(option); // Call the same function as filtering for sorting options
  };

  // Render the sorting options dropdown
  const renderSortOptions = () => (
    <div className="sort-menu">
      <div id="sort-menu-item" onClick={() => handleSortOption("Ascending")}>
        Ascending (A-Z)
      </div>
      <div id="sort-menu-item" onClick={() => handleSortOption("Descending")}>
        Descending (Z-A)
      </div>
      <div id="sort-menu-item" onClick={() => handleSortOption("Popularity")}>
        Popularity
      </div>
      <div id="sort-menu-item" onClick={() => handleSortOption("Relevance")}>
        Relevance
      </div>
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
            placeholder="type here to search"
            onClick={onSearchBarClick}
          />
          <i className="bi bi-filter filter-icon" aria-hidden="true"></i>
          <i className="bi bi-x clear-icon" aria-hidden="true"></i>
        </div>

        {showSearchBar && inputValue && (
          <div className="suggest-list">
            {/* Apply filtering based on the selected option */}
            {database
              .filter((item) =>
                item.name.toLowerCase().includes(inputValue.toLowerCase())
              )
              .filter((item) => !filterOption || item.category === filterOption)
              .map((item, index) => (
                <div key={index}>{item.name}</div>
              ))}
          </div>
        )}

        {/* Filter menu */}
        {showFilterMenu && (
          <div className="filter-menu" ref={filterMenuRef}>
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
            {/* Sorting option */}
            <div>
              <span onClick={() => setShowSortMenu(!showSortMenu)}>Sort</span>
              {showSortMenu && renderSortOptions()}{" "}
              {/* Render sorting options if visible */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
