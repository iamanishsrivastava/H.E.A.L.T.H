import React, { useEffect, useRef, useState } from "react";
import "./SettingsMenu.css";

function SettingsMenu({ onClose }) {
  const menuRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
        setIsVisible(false); // Close the menu when clicking outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={`settings-menu no-select ${isVisible ? "visible" : ""}`} ref={menuRef}>
      <div className="intro-section gap-3">
        <h2 className="text">Settings</h2>
      </div>
      <div className="settings-list">
        <div className="row-one">
          <div className="dark-mode-icon-container hover" onClick={toggleVisibility}>
            <i className="bi bi-lightbulb dark-mode-icon icon"></i>
            <p id="dark-mode-text">Dark Mode</p>
          </div>
          <div className="eye-care-icon-container hover">
            <i className="bi bi-eye eye-care-icon icon"></i>
            <p id="eye-care-text">Eye Care</p>
          </div>
        </div>
        <div className="row-two">
          <div className="accessibility-icon-container hover">
            <i className="bi bi-universal-access-circle accessibility-icon icon"></i>
            <p id="accessibility-text">Accessibility</p>
          </div>
          <div className="language-icon-container hover">
            <i className="bi bi-translate language-icon icon"></i>
            <p id="language-text">Language</p>
          </div>
        </div>
        <div className="more-settings-container hover">
          <p id="more-settings-text">More Settings</p>
          <i className="bi bi-chevron-right more-settings-icon"></i>
        </div>
      </div>
    </div>
  );
}

export default SettingsMenu;
