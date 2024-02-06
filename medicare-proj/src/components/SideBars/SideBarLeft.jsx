import React from "react";

function SideBarLeft({ onIconClick }) {
  return (
    <aside className="sidebar-left">
      <i onClick={onIconClick} className="bi bi-house house-icon"></i>
    </aside>
  );
}

export default SideBarLeft;