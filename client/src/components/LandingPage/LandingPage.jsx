import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import NavBar from "./components/NavBar";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <NavBar />
      <div className="content-container">
        <p className="health-ff">
          Health Empowerment and Lifestyle Transformation Hub
        </p>
        <div className="tagline">
          where health <br /> is priority
        </div>
        <div className="gotoApp-container">
          <Link to="/health-app" className="gotoApp">
            Continue Without Login
            <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </div>
      <section id="why">
        <p className="title">
          Why <span id="brand-name">H.E.A.L.T.H</span>?
        </p>
        <p className="why-content"></p>
      </section>
      <center id="brand-name">This site is under development, for more information please contact the site owner Anish Srivastava at <a href="mailto:anishamsri@gmail.com?body=I%20am%20writing%20this%20email%20because..." target="_top">anishamsri@gmail.com</a>, you can also join the <a href="https://discord.gg/tFbKENWSTt" target="_blank">H.E.A.L.T.H Discord Server</a>.</center>
    </div>
  );
};

export default LandingPage;
