import React, { useRef, useEffect, useState } from "react";
import "./FilterMenu.css"

const FilterMenu = ({
  showFilterMenu,
  handleFilterOption,
  handleFilterMenuClose,
  setShowFilterMenu,
}) => {
  const [sortText, setSortText] = useState(""); // State for displaying text on sort icon hover

  // Function to render individual sort option
  const renderSortOption = (iconClass, text, option) => (
    <div
      key={option}
      className="sort-menu-item"
      onClick={() => handleFilterOption(option)}
      onMouseOver={() => setSortText(text)}
      onMouseLeave={() => setSortText("")}
    >
      <i className={`bi ${iconClass}`}></i>
    </div>
  );

  // Ref for filter menu
  const filterMenuRef = useRef(null);

  // Event handler for clicking outside the filter menu
  const handleClickOutside = (event) => {
    if (
      filterMenuRef.current &&
      !filterMenuRef.current.contains(event.target) &&
      !event.target.classList.contains("filter-icon")
    ) {
      setShowFilterMenu(false);
    }

    // Close the sort menu when a click occurs outside of it
    setShowFilterMenu(false);
  };

  // Effect hook for handling clicks outside filter menu
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function to render sort options
  const renderSortOptions = () => (
    <div className="sort-menu">
      {renderSortOption("bi-sort-alpha-up", "Descending (Z-A)", "Descending")}
      {renderSortOption("bi-sort-alpha-down", "Ascending (A-Z)", "Ascending")}
      {renderSortOption("bi-heart-fill", "Popularity", "Popularity")}
      {renderSortOption("bi-star-fill", "Relevance", "Relevance")}
    </div>
  );

  return (
    <div
      className={`filter-menu ${showFilterMenu ? "filter-menu-visible" : ""}`}
      ref={filterMenuRef}
    >
      {/* Render sort options */}
      {renderSortOptions()}
      <div className="filtersort-separator-line"></div>
      {/* Options to filter by category */}
      <div id="filter-menu-item" onClick={() => handleFilterOption(null)}>
        All
      </div>
      <div id="filter-menu-item" onClick={() => handleFilterOption("Medicine")}>
        Medicine
      </div>
      <div id="filter-menu-item" onClick={() => handleFilterOption("Symptom")}>
        Symptom
      </div>
    </div>
  );
};

export default FilterMenu;
