import React from 'react';
import "./SearchResults.css";

const SearchResults = ({ selectedMedicine }) => {
  // Check if selectedMedicine is null or undefined
  if (!selectedMedicine) {
    return <div>No medicine selected</div>;
  }

  // Logic to fetch and display content related to the selected medicine

  return (
    <div className="search-results-container">
      {/* Grid layout to display medicine details */}
      <div className="medicine-details">
        {/* Display name, symptoms, usage, advice */}
        <div className="medicine-detail">
          <label>Name:</label>
          <span>{selectedMedicine.name}</span>
        </div>
        <div className="medicine-detail">
          <label>Symptoms:</label>
          <span>{selectedMedicine.symptoms}</span>
        </div>
        <div className="medicine-detail">
          <label>Usage:</label>
          <span>{selectedMedicine.usage}</span>
        </div>
        <div className="medicine-detail">
          <label>Advice:</label>
          <span>{selectedMedicine.advice}</span>
        </div>
        {/* Add more fields for future additions */}
      </div>
    </div>
  );
};

export default SearchResults;