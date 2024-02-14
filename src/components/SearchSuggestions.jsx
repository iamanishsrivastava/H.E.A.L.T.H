import React from 'react';

const SearchSuggestions = ({ medicineData, inputValue, filterOption, handleMedicineSelect }) => {
  return (
    <div className="suggest-item-list-container">
      <div className="suggest-item-list">
        {/* Display "No info available" if no matches found */}
        {medicineData.length === 0 ||
        medicineData.filter(
          (item) =>
            (item.name &&
              item.name
                .toLowerCase()
                .includes(inputValue.toLowerCase())) ||
            (item.symptoms &&
              item.symptoms
                .toLowerCase()
                .includes(inputValue.toLowerCase()))
        ).length === 0 ? (
          <div className="no-info">
            No info available.
          </div>
        ) : (
          // Display search results
          medicineData
            .filter(
              (item) =>
                (item.name &&
                  item.name
                    .toLowerCase()
                    .includes(inputValue.toLowerCase())) ||
                (item.symptoms &&
                  item.symptoms
                    .toLowerCase()
                    .includes(inputValue.toLowerCase()))
            )
            .filter(
              (item) => !filterOption || item.category === filterOption
            )
            .map((item, index) => (
              <div className="suggest-item-container" key={index}>
                <div className="suggest-item" onClick={() => handleMedicineSelect(item)}>{item.name}</div>
                {/* <div className="suggest-item">{item.symptoms}</div> */}
                {/* change .suggest-item width to 50% */}
              </div>
            ))
        )}
      </div>
    </div>
  );
};

export default SearchSuggestions;