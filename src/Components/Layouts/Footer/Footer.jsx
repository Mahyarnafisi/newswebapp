import React from "react";
import footerStyle from "./Footer.module.css";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <div className={footerStyle.footer}>
      <p>This a Clone of Dominos Website, 2023 Dominos Pizza. All Rights Reserved</p>
      <div className={footerStyle.icons}>
        <NavLink>
          <i class="bi bi-instagram"></i>
        </NavLink>
        <NavLink>
          <i class="bi bi-facebook"></i>
        </NavLink>
      </div>
      <div></div>
    </div>
  );
}

export default Footer;
