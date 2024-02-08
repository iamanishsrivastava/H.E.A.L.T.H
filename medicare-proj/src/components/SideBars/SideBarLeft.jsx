import React from "react";
import "./SideBarLeft.css";

function SideBarLeft({ onIconClick }) {
  return (
    <div className="sidebar-left">
      <nav className="house-icon-container">
        <i onClick={onIconClick} className="bi bi-house-fill house-icon"></i>
      </nav>
      <nav className="settings-icon-container">
        <i className="bi bi-gear settings-icon" onClick={onIconClick}></i>
      </nav>
    </div>
  );
}

export default SideBarLeft;
