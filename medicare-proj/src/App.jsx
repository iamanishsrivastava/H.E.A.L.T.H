import './App.css';

function App() {

  return (
    <>
      <section className="main">
        <aside className="sidebar-left">
          <i className="bi bi-house house-icon"></i>
        </aside>
        <div className="home">
          <div className="search-container gap-1">
            <div className="search-info">
              info about<br/>medicines/symptoms?
            </div>
            <div className="search-bar">
              <input type="text" className="search-input" placeholder='type here to search' />
            </div>
          </div>
          <div className="medc-container">
            <p id="options">
              MEDICARE
            </p>
          </div>
        </div>
        <aside className="sidebar-right">
          d
        </aside>
      </section>
    </>
  )
}

export default App
