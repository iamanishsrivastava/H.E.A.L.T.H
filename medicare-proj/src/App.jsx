import './App.css';

function App() {

  return (
    <>
      <main className="main">
        <aside className="sidebar-left">
          <i className="bi bi-house-fill house-icon"></i>
        </aside>
        <div className="home">
          <div className="search-container gap-2">
            <div className="search-info">
              info about<br/>medicines/symptoms?
            </div>
            <div className="search-bar">
              <input type="text" className="search-input" placeholder='type here to search' />
              <div className="iconContainer">
                <i class="bi bi-filter filter-icon" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div className="medc-container">
            <p class="options">
              MEDICARE
            </p>
          </div>
        </div>
        <aside className="sidebar-right">
          <i class="bi bi-person-circle user-icon"></i>
          <i class="bi bi-gear settings-icon"></i>
        </aside>
      </main>
    </>
  )
}

export default App
