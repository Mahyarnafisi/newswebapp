import React from "react";
import mainStyle from "./Main.module.css";
import Navbar from "../Navbar/Navbar";
import ButtonGroup from "../Navbar/ButtonGroup/ButtonGroup";
import Footer from "../Footer/Footer";
import Franchise from "../../Pages/Franchise/Franchise";

function Main(props) {
  return (
    <div className={mainStyle.main}>
      {/* <Navbar /> */}
      {/* <ButtonGroup /> */}
      <Franchise />
      <Footer />
    </div>
  );
}

export default Main;
