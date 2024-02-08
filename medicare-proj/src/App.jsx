import React, { useState } from "react";

import "./App.css";
import Home from "./components/Home";
import SideBarLeft from "./components/SideBars/SideBarLeft";
import SideBarRight from "./components/SideBars/SideBarRight";
import Searched from "./components/Searched";
// import SettingsMenu from "./components/SettingsMenu";

function App() {
  const [content, setContent] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [filterOption, setFilterOption] = useState(null);

  const handleSearch = (results) => {
    setSearchResults(results);
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
      if (content === "") {
        // The user is already on the home page, so refresh
        window.location.reload();
      } else {
        // Default action (e.g., go back to home)
        setContent("");
      }
    } else {
      // Default action (e.g., go back to home)
      setContent("");
    }
  };

  // Render content based on the value of the 'content' state
  let renderedContent;
  if (content === "searched") {
    renderedContent = (
      <Home
        onSearchBarClick={() => handleClick("onSearchBarClick")}
        onSettingsClick={() => handleClick("onSettingsClick")}
        onSearch={handleSearch}
        filterOption={filterOption}
      />
    );
  } else if (content === "onSettingsClick") {
    renderedContent = <Home />;
  } else {
    renderedContent = (
      <Home
        onSearchBarClick={() => handleClick("onSearchBarClick")}
        onSettingsClick={() => handleClick("onSettingsClick")}
        onSearch={handleSearch}
        filterOption={filterOption}
      />
    );
  }

  return (
    <>
      <div className="main">
        <SideBarLeft onIconClick={() => handleClick("home")} />
        {renderedContent}
        <SideBarRight onIconClick={() => handleClick("onSettingsClick")} />
      </div>
      <div className="medc-container">
        <p id="options">MEDICARE</p>
      </div>
    </>
  );
}

export default App;
