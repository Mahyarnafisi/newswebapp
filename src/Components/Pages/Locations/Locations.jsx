import React from "react";
import locationsStyles from "./Locations.module.css";
function Locations(props) {
  return (
    <div className={locationsStyles.locations}>
      <h1 className={locationsStyles.title}>Stores</h1>
    </div>
  );
}

export default Locations;
