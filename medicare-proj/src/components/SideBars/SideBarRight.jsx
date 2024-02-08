import React from "react";
import "./SideBarRight.css";

function SideBarRight({ onIconClick }) {
  return (
    <aside className="sidebar-right">
      <i class="bi bi-person-circle user-icon"></i>
      <i class="bi bi-gear settings-icon" onClick={onIconClick}></i>
    </aside>
  );
}

export default SideBarRight;
