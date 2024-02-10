import "./SettingsMenu.css";

const SettingsMenu = () => {
   return (
         <div className="settings-container">
            <div className="intro-section">
               <h2 className="text">Settings</h2>
            </div>
            <div className="settings-list">
               <ul>
                  <li>Account</li>
                  <li>History</li>
                  <li>Privacy</li>
                  <li>Language</li>
               </ul>
            </div>
         </div>
   )
}

export default SettingsMenu;