import React, { useState, useRef, useEffect } from "react";
import "./Home.css";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import SearchSuggestions from "./SearchSuggestions.jsx";
import FilterMenu from "./FilterMenu";
import InfoDisplay from "./InfoDisplay.jsx";
import SortMenu from "./SortMenu";

// Define the quickSort function
const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  // Choose pivot element
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [];
  const right = [];

  // Partition the array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name < pivot.name) {
      left.push(arr[i]);
    } else if (arr[i].name > pivot.name) {
      right.push(arr[i]);
    }
  }

  // Recursively apply quicksort on left and right partitions
  return [...quickSort(left), pivot, ...quickSort(right)];
};

const Home = () => {
  // State variables
  const [inputValue, setInputValue] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [filterOption, setFilterOption] = useState(null);

  const [medicineData, setMedicineData] = useState([]); // State to store fetched medicine data

  const [selectedMedicine, setSelectedMedicine] = useState(null); // state for selected medicine

  useEffect(() => {
    // Effect hook for fetching medicine data
    const fetchMedicineData = async () => {
      try {
        const response = await fetch("/api/medicine");
        if (!response.ok) {
          throw new Error("Failed to fetch medicine data");
        }
        const data = await response.json();
        setMedicineData(data);
      } catch (error) {
        console.error("Error fetching medicine data:", error);
      }
    };

    fetchMedicineData(); // Call the function immediately

    // Event listener for clicking outside search container when a medicine is selected
    const handleClickOutside = (event) => {
      const searchContainer = document.querySelector(".search-container");
      if (
        searchContainer &&
        !searchContainer.contains(event.target) &&
        selectedMedicine
      ) {
        setShowSearchBar(false);
      }
    };

    // Add event listener when a medicine is selected
    if (selectedMedicine) {
      document.addEventListener("click", handleClickOutside);
    }

    // Cleanup function to remove event listener when component unmounts or when medicine is deselected
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [selectedMedicine]); // Re-run effect when selectedMedicine changes

  // Event handler for input change
  const handleChange = (event) => {
    setInputValue(event.target.value);
    setShowSearchBar(true);
  };

  // Event handler for input focus
  const handleFocus = () => {
    setShowSearchBar(true);
    const searchContainer = document.querySelector(".search-container");
    if (searchContainer) {
      searchContainer.classList.add("focused");
      if (selectedMedicine) {
        searchContainer.classList.add("selected");
      }
    }
  };

  const handleMedicineSelect = (medicine) => {
    setSelectedMedicine(medicine);
    setInputValue(medicine.name);
    setShowSearchBar(false); // Hide search bar after selection
    const searchContainer = document.querySelector(".search-container");
    if (searchContainer) {
      searchContainer.classList.remove("focused"); // Remove focus class
      searchContainer.classList.add("selected"); // Add selected class
    }
  };

  // Event handler for clearing input
  const handleClear = () => {
    setInputValue("");
  };

  const handleFilterMenuClose = () => {
    setShowFilterMenu(false);
  };

  // Event handler for selecting filter option
  const handleFilterOption = (option) => {
    let sortedData = [...medicineData];
    if (option === "Ascending") {
      sortedData.sort((a, b) => a.name.localeCompare(b.name));
    } else if (option === "Descending") {
      sortedData.sort((a, b) => b.name.localeCompare(a.name));
    } else if (option === "Popularity") {
      // Implement custom sorting logic
    } else if (option === "Relevance") {
      // Implement custom sorting logic
    } else {
      setFilterOption(option);
      return;
    }
    setMedicineData(sortedData);
  };

  // Conditionally determine the class based on the presence of selectedMedicine
  const searchBarClass = selectedMedicine ? "selected" : "";

  return (
    // Main container with conditional class based on filter menu visibility
    <div className={`home ${searchBarClass}`}>
      {/* Container for search functionality */}
      <div className={`search-container gap-1`}>
        {/* Information display section */}

        {/* Render InfoDisplay */}
        <InfoDisplay
          showSearchBar={showSearchBar || !!selectedMedicine}
          // showSearchResults={!!selectedMedicine}
        />

        <SearchBar
          inputValue={inputValue}
          handleChange={handleChange}
          handleFocus={handleFocus}
          handleClear={handleClear}
          setShowFilterMenu={setShowFilterMenu}
          showSearchBar={showSearchBar}
          selectedMedicine={selectedMedicine}
        />

        {/* Conditionally render the FilterMenu only when showSearchBar is true */}
        {showSearchBar && inputValue && (
          <FilterMenu
            showFilterMenu={showFilterMenu}
            handleFilterOption={handleFilterOption}
            handleFilterMenuClose={handleFilterMenuClose}
            setShowFilterMenu={setShowFilterMenu}
          />
        )}

        <div className="separator-line"></div>

        {/* Display search suggestions based on input value */}
        {showSearchBar && inputValue && (
          <SearchSuggestions
            medicineData={medicineData}
            inputValue={inputValue}
            filterOption={filterOption}
            handleMedicineSelect={handleMedicineSelect}
          />
        )}
      </div>
      {/* Pass selected medicine to SearchResults */}
      {selectedMedicine && (
        <SearchResults selectedMedicine={selectedMedicine} />
      )}
    </div>
  );
};

export default Home;
