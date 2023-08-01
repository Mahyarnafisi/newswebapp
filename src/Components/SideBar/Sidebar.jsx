import React from "react";
import sidebarStyle from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";

function Sidebar(props) {
  return (
    <div>
      <div className={sidebarStyle.overLayer}></div>
      <div className={sidebarStyle.sidebar}>
        <div className={sidebarStyle.sidebar__header}>
          <button>
            <i class="bi bi-x-lg"></i>
          </button>
          <NavLink className={sidebarStyle.sidebar__Login}>Log-in</NavLink>
        </div>
        <div className={sidebarStyle.sidebar__links}>
          <NavLink className={sidebarStyle.sidebar__mainLink}>order</NavLink>
          <NavLink className={sidebarStyle.sidebar__mainLink}>resister</NavLink>
          <NavLink className={sidebarStyle.sidebar__mainLink}>locations</NavLink>
          <NavLink className={sidebarStyle.sidebar__mainLink}>contact us</NavLink>
          <NavLink className={sidebarStyle.sidebar__mainLink}>working with us</NavLink>
          <NavLink className={sidebarStyle.sidebar__mainLink}>franchise</NavLink>
        </div>
        <br />
        <br />
        <div className={sidebarStyle.sidebar__links}>
          <NavLink className={sidebarStyle.sidebar__link}>Nutritional Info</NavLink>
          <NavLink className={sidebarStyle.sidebar__link}>Terms of use</NavLink>
          <NavLink className={sidebarStyle.sidebar__link}>privacy & cookies</NavLink>
          <NavLink className={sidebarStyle.sidebar__link}>member terms</NavLink>
          <NavLink className={sidebarStyle.sidebar__link}>student discount</NavLink>
        </div>
        <br />
        <div className={sidebarStyle.sidebar__language}>
          <h2>Language</h2>
          <button className={sidebarStyle.sidebar__language_btn}>English</button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
