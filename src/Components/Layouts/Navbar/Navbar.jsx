import React from "react";
import navbarStyle from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
function Navbar(props) {
  return (
    <div className={navbarStyle.navbar}>
      <div className={navbarStyle.navbar__container}>
        <NavLink className={navbarStyle.navLink}>
          <h1>deals</h1>
        </NavLink>
        <NavLink className={navbarStyle.navLink}>
          <h1>pizza</h1>
        </NavLink>
        <NavLink className={navbarStyle.navLink}>
          <h1>sides</h1>
        </NavLink>
        <NavLink className={navbarStyle.navLink}>
          <h1>drink</h1>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
