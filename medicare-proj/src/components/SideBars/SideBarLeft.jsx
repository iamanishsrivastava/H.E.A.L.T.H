import React, { useState } from "react";
import "./SideBarLeft.css";
import SettingsMenu from "../SettingsMenu"; // Import the SettingsMenu component

function SideBarLeft({ onSettingsIconClick, onHomeIconClick }) {
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);

  const handleSettingsIconClick = () => {
    setShowSettingsMenu(!showSettingsMenu);
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
        <i
          onClick={handleSettingsIconClick}
          className={`bi ${showSettingsMenu ? "bi-gear-fill" : "bi-gear"} settings-icon`}
        ></i>
      </nav>

      {/* Conditionally render SettingsMenu based on showSettingsMenu state */}
      {showSettingsMenu && (
        <SettingsMenu onClose={() => setShowSettingsMenu(false)} />
      )}
    </div>
  );
}

export default SideBarLeft;
