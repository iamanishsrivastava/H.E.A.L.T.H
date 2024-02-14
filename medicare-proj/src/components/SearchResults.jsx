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
      <div className="left-section-container">
        <p className='title'>Left section</p>
        <p className='content'>content</p>
      </div>
      <div className="medicine-details">
        {/* Display name, symptoms, usage, advice */}
        <div className="medicine-detail name">
          <label className='name-label label'>Name</label>
          <span>{selectedMedicine.name}</span>
        </div>
        <div className="medicine-detail symptoms">
          <label className='symptoms-label label'>Symptoms</label>
          <span>{selectedMedicine.symptoms}</span>
        </div>
        <div className="medicine-detail usage">
          <label className='usage-label label'>Usage</label>
          <span>{selectedMedicine.usage}</span>
        </div>
        <div className="medicine-detail advice">
          <label className='advice-label label'>Advice</label>
          <span>{selectedMedicine.advice}</span>
        </div>
        {/* Add more fields for future additions */}
      </div>
    </div>
  );
};

export default SearchResults;