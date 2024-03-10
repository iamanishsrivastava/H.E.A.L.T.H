import React, { useEffect, useState, useRef } from "react";
import "./ProfileMenu.css";

const ProfileMenu = ({ onClose, showProfileMenu, handleSignUpClick }) => {
  const menuRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
        setIsVisible(false); //close the menu when clicking outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.addEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div
      className={`profile-menu no-select ${isVisible ? "visible" : ""}`}
      ref={menuRef}
    >
      <div className="intro-section gap-3">
        <h2 className="title">Profile Menu</h2>
      </div>
      <div className="profile-menu-list">
        <div className="menu-item hover" onClick={handleSignUpClick}>
          <i className="bi bi-box-arrow-in-right"></i>
          <span>Sign In/Sign Up?</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;
g;
