import React from "react";
import footerStyle from "./Footer.module.css";
import { NavLink, Link } from "react-router-dom";
function Footer() {
  return (
    <div className={footerStyle.footer}>
      <p className={footerStyle.text}>This a Clone of Dominos Website, 2023 Dominos Pizza. All Rights Reserved</p>
      <div className={footerStyle.icons}>
        <Link className={footerStyle.link}>
          <i class="bi bi-instagram"></i>
        </Link>
        <Link className={footerStyle.link}>
          <i class="bi bi-facebook"></i>
        </Link>
      </div>
      <div></div>
    </div>
  );
}

export default Footer;
