import React, { useState } from "react";
import "./SideBarLeft.css";
import SettingsMenu from "../SettingsMenu"; // Import the SettingsMenu component
import { IoClose } from "react-icons/io5";

// Handle behavior of Settings icon
function SideBarLeft({ onSettingsIconClick, onHomeIconClick }) {
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);

  const handleSettingsIconClick = () => {
    console.log("handle settings icon click");
    setShowSettingsMenu(true);
  };

  return (
    <div className="sidebar-left">
      <nav className="house-icon-container">
        <i
          onClick={onHomeIconClick}
          className="bi bi-house-fill house-icon"
        ></i>
      </nav>
      <nav className="settings-icon-container">

    
      <div onClick={handleSettingsIconClick}>
        {
          showSettingsMenu ?  <i className="bi bi-gear-fill settings-icon"></i> :  <i className="bi bi-gear settings-icon"></i>
        }
      </div>
    
      </nav>

      {/* Conditionally render SettingsMenu based on showSettingsMenu state */}
      {showSettingsMenu && (
        <SettingsMenu onClose={handleSettingsIconClick}/>
      )}
    </div>
  );
}

export default SideBarLeft;
