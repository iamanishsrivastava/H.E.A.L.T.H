import React, { useState, useRef, useEffect } from "react";
import "./Home.css";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [filterOption, setFilterOption] = useState(null);
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [sortText, setSortText] = useState(""); // State for displaying text on sort icon hover
  const [medicineData, setMedicineData] = useState([]); // State to store fetched medicine data
  const [isHovered, setIsHovered] = useState(false);

  const filterMenuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      filterMenuRef.current &&
      !filterMenuRef.current.contains(event.target) &&
      !event.target.classList.contains("filter-icon")
    ) {
      // setShowFilterMenu(false);
      setShowSortMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Fetch medicine data when the component mounts
    fetchMedicineData();
  }, []);

  const fetchMedicineData = async () => {
    try {
      const response = await fetch("http://localhost:5170/api/medicine");
      if (!response.ok) {
        throw new Error("Failed to fetch medicine data");
      }
      const data = await response.json();
      console.log("Fetched medicine data:", data);
      setMedicineData(data);
    } catch (error) {
      console.error("Error fetching medicine data:", error);
    }
  };

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
    let sortedData = [...medicineData]; // Create a copy of the medicineData array
    if (option === "Ascending") {
      sortedData.sort((a, b) => a.name.localeCompare(b.name));
    } else if (option === "Descending") {
      sortedData.sort((a, b) => b.name.localeCompare(a.name));
    } else if (option === "Popularity") {
      // Implement your custom sorting logic here
    } else if (option === "Relevance") {
      // Implement your custom sorting logic here
    } else {
      setFilterOption(option);
      return; // Exit early if no sorting option is selected
    }
    setMedicineData(sortedData);
    // setShowFilterMenu(false);
  };

  const handleSortOption = (option) => {
    handleFilterOption(option);
  };

  const renderSortOptions = () => (
    <div className="sort-menu">
      {renderSortOption(
        "bi-sort-alpha-up",
        "Descending (Z-A)",
        "Descending",
        handleSortOption
      )}
      {renderSortOption(
        "bi-sort-alpha-down",
        "Ascending (A-Z)",
        "Ascending",
        handleSortOption
      )}
      {renderSortOption(
        "bi-heart-fill",
        "Popularity",
        "Popularity",
        handleSortOption
      )}
      {renderSortOption(
        "bi-star-fill",
        "Relevance",
        "Relevance",
        handleSortOption
      )}
    </div>
  );

  const renderSortOption = (iconClass, text, option, handleSortOption) => {
    return (
      <div
        key={option}
        className="sort-menu-item"
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => handleSortOption(option)} // Call handleSortOption with the selected option
      >
        {iconClass && <i className={`bi ${iconClass}`}></i>}
        {/* {isHovered && <div className="hovered-text">{text}</div>} */}
      </div>
    );
  };

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
        {console.log("Input value:", inputValue)}
        {console.log("Medicine data:", medicineData)}
        {showSearchBar && inputValue && (
          <div className="suggest-item-list-container">
            <div className="suggest-item-list">
              {medicineData.length === 0 ||
              medicineData.filter(
                (item) =>
                  (item.name &&
                    item.name
                      .toLowerCase()
                      .includes(inputValue.toLowerCase())) ||
                  (item.symptoms &&
                    item.symptoms
                      .toLowerCase()
                      .includes(inputValue.toLowerCase()))
              ).length === 0 ? (
                <div className="no-info">
                  <span>No info available.</span>
                </div>
              ) : (
                
                medicineData
                  .filter(
                    (item) =>
                      (item.name &&
                        item.name
                          .toLowerCase()
                          .includes(inputValue.toLowerCase())) ||
                      (item.symptoms &&
                        item.symptoms
                          .toLowerCase()
                          .includes(inputValue.toLowerCase()))
                  )
                  .filter(
                    (item) => !filterOption || item.category === filterOption
                  )
                  .map((item, index) => (
                    <div className="suggest-item-container" key={index}>
                      <div className="suggest-item">{item.name}</div>
                      <div className="suggest-item">{item.symptoms}</div>
                    </div>
                  ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;