import React from "react";
import mainStyle from "./Main.module.css";
import Navbar from "../Navbar/Navbar";
import ButtonGroup from "../Navbar/ButtonGroup/ButtonGroup";

function Main(props) {
  return (
    <div className={mainStyle.main}>
      <Navbar />
      <ButtonGroup />
    </div>
  );
}

export default Main;
