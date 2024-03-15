// LandingPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import NavBar from "./components/NavBar";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <NavBar />
      <div className="content-container">
        <div className="content">
          <div className="text">
            <p className="health-ff">
              Health Empowerment and Lifestyle Transformation Hub
            </p>
            <div className="tagline">
              <span>
                where health
                <br />
                is priority
              </span>
            </div>
          </div>
          <div className="gotoSearchApp-container">
            <Link to="/health-app" className="gotoSearchApp">
              Continue Without Login
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
      <section id="why">
        <p className="title">
          Why <span id="brand-name">H.E.A.L.T.H</span>?
        </p>
        <p className="why-content"></p>
      </section>
    </div>
  );
};

export default LandingPage;
