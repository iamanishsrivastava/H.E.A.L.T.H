// import "./Searched.css";

const Searched = (onSearchBarClick) => {
  return (<center onClick={onSearchBarClick}> 
  <div className="home">
  <div className="search-container gap-2">
    <div className="search-info">
      medicines/symptoms?
    </div>
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        onClick={onSearchBarClick}
      />
      <i class="bi bi-filter filter-icon" aria-hidden="true"></i>
      <i class="bi bi-x clear-icon" aria-hidden="true"></i>
    </div>
    <div className="suggest-list">
      <ul>
        
      </ul>
    </div>
  </div>
</div></center>);
};

export default Searched;
