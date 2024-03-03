import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import SideBarLeft from "./components/SideBars/SideBarLeft";
import SideBarRight from "./components/SideBars/SideBarRight";

function App() {
  const [content, setContent] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [filterOption, setFilterOption] = useState(null);

  const handleSearch = (results) => {
    setSearchResults(results);
    setContent("searched"); // Update content to indicate search results are being displayed
  };
  
  const handleFilterOption = (option) => {
    setFilterOption(option);
  };

  const handleClick = (action) => {
    if (action === "onSearchBarClick") {
      setContent("searched");
    } else if (action === "onSettingsClick") {
      setContent("onSettingsClick");
    } else if (action === "home") {
      // Check if the current content is already "home", if so, refresh the page
      if (content === "" || content === "onSettingsClick") {
        // The user is already on the home page, so refresh
        setContent("");
        setSearchResults([]); // Clear search results
        setFilterOption(null); // Clear filter options
      } else {
        // Default action (e.g., go back to home)
        setContent("home");
      }
    } else {
      // Default action (e.g., go back to home)
      setContent("");
    }
  };

  let renderedContent;
  if (content === "searched") {
    renderedContent = (
      <Home
        onSearchBarClick={() => handleClick("onSearchBarClick")}
        onSettingsClick={() => handleClick("onSettingsClick")}
        onSearch={handleSearch}
        filterOption={filterOption}
        searchResults={searchResults} // Pass the search results to the Home component
      />
    );
  } else if (content === "onSettingsClick") {
    // renderedContent = <SettingsMenu />;
  } else {
    // Default to rendering the Home component without search results
    renderedContent = (
      <Home
        onSearchBarClick={() => handleClick("onSearchBarClick")}
        onSettingsIconClick={() => handleClick("onSettingsClick")}
        onSearch={handleSearch}
        filterOption={filterOption}
      />
    );
  }

  return (
    <>
      <div className="main">
        <SideBarLeft onHomeIconClick={() => handleClick("home")}
      onSettingsIconClick={() => handleClick("onSettingsClick")} />
        {renderedContent}
        <SideBarRight onProfileIconClick={() => handleClick("profile")} />
        
      </div>
      <div className="footer-container">
        <p id="footer">MEDICARE</p>
      </div>
    </>
  );
}

export default App;