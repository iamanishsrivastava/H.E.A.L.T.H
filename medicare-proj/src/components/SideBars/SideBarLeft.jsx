import React from "react";
import "./SideBarLeft.css";

function SideBarLeft({ onSettingsIconClick, onHomeIconClick }) {
  return (
    <div className="sidebar-left">
      <nav className="house-icon-container">
        <i onClick={onHomeIconClick} className="bi bi-house-fill house-icon"></i>
      </nav>
      <nav className="settings-icon-container">
        <i onClick={onSettingsIconClick} className="bi bi-gear settings-icon"></i>
      </nav>
    </div>
  );
}

export default SideBarLeft;