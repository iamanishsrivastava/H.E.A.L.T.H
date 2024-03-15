import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Logo from "../../../components/Logo";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <div className="navbar-container">
      <div className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <Logo />
        <div className="item-container">
          <ul>
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
