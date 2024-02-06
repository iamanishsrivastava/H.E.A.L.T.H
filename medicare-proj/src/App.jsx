import React, { useState } from "react";

import "./App.css";
import Home from "./components/Home";
import SideBarLeft from "./components/SideBars/SideBarLeft";
import SideBarRight from "./components/SideBars/SideBarRight";
import Searched from "./components/Searched";

function App() {
  const [content, setContent] = useState("");

  const handleClick = (action, data) => {
    if (action === "searchBarClicked") {
      setContent("searched");
    } else if (action === "otherComponentClicked") {
      // Set content to indicate that the other component should be rendered
      setContent("otherComponent");
    } else {
      // Default action (e.g., go back to home)
      setContent("");
    }
  };

  // Render content based on the value of the 'content' state
  let renderedContent;
  if (content === "searched") {
    renderedContent = <Searched />;
  } else if (content === "otherComponent") {
    renderedContent = <OtherComponent />;
  } else {
    renderedContent = (
      <Home
        onSearchBarClick={() => handleClick("searchBarClicked")}
        onOtherComponentClick={() => handleClick("otherComponentClicked")}
      />
    );
  }
  
  return (
    <>
      <section className="main">
        <SideBarLeft onIconClick={() => handleClick("home")}/>
        {renderedContent}
        <SideBarRight />
      </section>
    </>
  );
}

export default App;
