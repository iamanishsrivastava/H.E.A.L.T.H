import React, { useState } from "react";

import "./App.css";
import Home from "./components/Home";
import SideBarLeft from "./components/SideBars/SideBarLeft";
import SideBarRight from "./components/SideBars/SideBarRight";
import Searched from "./components/Searched";
// import SettingsMenu from "./components/SettingsMenu";

function App() {
  const [content, setContent] = useState("");

  const handleClick = (action) => {
    if (action === "onSearchBarClick") {
      setContent("searched");
    } else if (action === "onSettingsClick") {
      setContent("onSettingsClick");
    } else {
      // Default action (e.g., go back to home)
      setContent("");
    }
  };

  // Render content based on the value of the 'content' state
  let renderedContent;
  if (content === "searched") {
    renderedContent = <Searched />;
  } else if (content === "onSettingsClick") {
    renderedContent = <Home />;
  } else {
    renderedContent = (
      <Home
        onSearchBarClick={() => handleClick("onSearchBarClick")}
        onSettingsClick={() => handleClick("onSettingsClick")}
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
