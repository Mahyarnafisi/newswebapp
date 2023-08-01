import React from "react";
import buttongroupStyle from "./ButtonGroup.module.css";
import { NavLink } from "react-router-dom";

function ButtonGroup(props) {
  return (
    <div className={buttongroupStyle.buttonGroup__inner}>
      <NavLink className={buttongroupStyle.navLink}>All</NavLink>
      <NavLink className={buttongroupStyle.navLink}>Classic</NavLink>
      <NavLink className={buttongroupStyle.navLink}>Premium</NavLink>
      <NavLink className={buttongroupStyle.navLink}>Spicy</NavLink>
      <NavLink className={buttongroupStyle.navLink}>Top Seller</NavLink>
    </div>
  );
}

export default ButtonGroup;
