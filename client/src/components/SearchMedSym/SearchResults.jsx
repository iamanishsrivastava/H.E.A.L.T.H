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
        <div className="medicine-detail scientific-name">
          <label className="scientific-name-label label">Scientific Name</label>
          <span>$ScientificName</span>
        </div>
        <div className="medicine-detail buy-link">
          <label className="buy-link-label label">Buy Link</label>
          <span>$BuyLink</span>
        </div>

        {/* Add more fields for future additions */}
      </div>
    </div>
  );
};

export default SearchResults;