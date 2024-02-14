import React from "react";

const InfoDisplay = ({ showSearchBar, showSearchResults }) => {
  return (
    <div className="search-info">
      {/* Display info about medicines/symptoms if search bar is not focused */}
      {!showSearchBar && !showSearchResults && (
        <div className="transition-info">
          info about
          <br />
          medicines/symptoms?
        </div>
      )}
      {/* Display "medicine/symptoms?" if search bar is focused */}
      {(showSearchBar || showSearchResults) && (
        <div className="med-sym">
          <br />
          medicine/symptoms?
        </div>
      )}
    </div>
  );
};

export default InfoDisplay;