import React from "react";
import './SideBarLeft.css';

function SideBarLeft({ onIconClick }) {
  return (
    <aside className="sidebar-left">
      <i onClick={onIconClick} className="bi bi-house-fill house-icon"></i>
    </aside>
  );
}

export default SideBarLeft;