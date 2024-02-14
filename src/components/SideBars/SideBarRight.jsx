import React from "react";
import "./SideBarRight.css";

function SideBarRight({onProfileIconClick}) {
  return (
    <div className="sidebar-right">
      <aside className="user-icon-container">
        <i onClick={onProfileIconClick} className="bi bi-person-circle user-icon"></i>
      </aside>
    </div>
  );
}

export default SideBarRight;
