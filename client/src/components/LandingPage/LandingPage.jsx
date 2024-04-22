// LandingPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import NavBar from "./components/NavBar";
import ForYouSection from "./components/ForYouSection";
import WhySection from "./components/WhySection";
import ExploreSection from "./components/ExploreSection";
import ApproachSection from "./components/ApproachSection";
import CommunitySection from "./components/CommunitySection";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="nav-content-container">
        <NavBar />
        <div className="content-container">
          <div className="content">
            <div className="text">
              <p className="health-ff">
                Health Empowerment and Lifestyle Transformation Hub
              </p>
              <div className="tagline">
                <span>
                  where health matters
                </span>
              </div>
            </div>
            <div className="gotoSearchApp-container">
              <Link to="/health-app" className="gotoSearchApp">
                Medicine/Symptom Search
                {/* <i className="bi bi-arrow-right"></i> */}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ForYouSection/>
      <WhySection/>
      <ExploreSection/>
      <ApproachSection/>
      <CommunitySection/>
      </div>
  );
};

export default LandingPage;
