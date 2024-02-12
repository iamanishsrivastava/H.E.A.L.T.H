import React, { useState } from "react";
import "./SideBarLeft.css";
import SettingsMenu from "../SettingsMenu"; // Import the SettingsMenu component
import { IoClose } from "react-icons/io5";
function SideBarLeft({ onSettingsIconClick, onHomeIconClick }) {
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);

  const handleSettingsIconClick = () => {
    // console.log("clicked")
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

    
      <div onClick={handleSettingsIconClick}>

     
        {
          showSettingsMenu ?  <IoClose color="white" size={32} /> :   <i
         
          className={`bi ${showSettingsMenu ? "bi-gear-fill" : "bi-gear"} settings-icon`}
        ></i>
        }
      </div>
    
      </nav>

      {/* Conditionally render SettingsMenu based on showSettingsMenu state */}
      {showSettingsMenu && (
        <SettingsMenu onClose={() => setShowSettingsMenu(false)} />
      )}
    </div>
  );
}

export default SideBarLeft;
