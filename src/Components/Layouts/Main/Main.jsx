import React from "react";
import mainStyle from "./Main.module.css";
import Navbar from "../Navbar/Navbar";
import ButtonGroup from "../Navbar/ButtonGroup/ButtonGroup";
import Footer from "../Footer/Footer";
import Franchise from "../../Pages/Franchise/Franchise";
import WorkHere from "../../Pages/WorkHere/WorkHere";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import Locations from "../../Pages/Locations/Locations";

function Main(props) {
  return (
    <div className={mainStyle.main}>
      {/* <Navbar /> */}
      {/* <ButtonGroup /> */}
      {/* <Franchise /> */}
      {/* <WorkHere /> */}
      {/* <ContactUs /> */}
      <Locations />
      <Footer />
    </div>
  );
}

export default Main;
