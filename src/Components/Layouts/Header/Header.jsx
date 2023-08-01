import React from "react";
import headerStyles from "./Header.module.css";
import Logo from "../../../assets/logos_png/CMYK_Blue_Type_Tile_Only.png";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className={headerStyles.header}>
      <div className={headerStyles.header__action}>
        <div className={headerStyles.sidebar}>
          <button className={headerStyles.sidebar__btn}>
            <i class="bi bi-list"></i>
          </button>
        </div>

        <div className={headerStyles.location}>
          <button className={headerStyles.location__btn}>
            <i class="bi bi-geo-alt"></i>
            <p>Lund</p>
            <i class="bi bi-chevron-down"></i>
          </button>
        </div>
      </div>
      <Link>
        <img className={headerStyles.logo} src={Logo} alt="" />
      </Link>
      <div className={headerStyles.profile}>
        <button className={headerStyles.profile__btn}>
          <i class="bi bi-person-fill"></i>
        </button>
      </div>
    </div>
  );
}

export default Header;
