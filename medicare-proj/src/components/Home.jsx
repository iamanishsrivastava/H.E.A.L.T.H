// import './Home.css'

import { useState } from "react";

function Home({ onClick }) {
  return (
    <div className="home">
      <div className="search-container gap-1">
        <div className="search-info">
          info about
          <br />
          medicines/symptoms?
        </div>
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="type here to search"
            onClick={onClick}
          />
        </div>

        <div className="iconContainer">
          <i class="bi bi-filter filter-icon" aria-hidden="true"></i>
        </div>
      </div>
      <div className="medc-container">
        <p id="options">MEDICARE</p>
      </div>
    </div>
  );
}
export default Home;
