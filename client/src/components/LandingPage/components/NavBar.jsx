import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Logo from "../../../components/Logo";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      console.log(scrollPosition);
      if (scrollPosition > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleActive = () => {
    setIsActive((prevActive) => !prevActive);
  };

  return (
    <div className="navbar-container">
      <div className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <Logo />
        <i className="bi bi-arrow-bar-left nav-icon" onClick={toggleActive}></i>
        <div className={`item-container ${isActive ? "active" : ""}`}>
          <div className="close-icon-container">
            <i className="bi bi-x-lg close-icon" onClick={toggleActive}></i>
          </div>
          <ul className={`${isActive ? "active" : ""}`}>
            <li className="nav-item">About</li>
            <li className="nav-item">Services</li>
            <li className="nav-item">Careers</li>
            <li className="nav-item">Contact</li>
          </ul>
          <Link to="/login" className="login" type="button">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
