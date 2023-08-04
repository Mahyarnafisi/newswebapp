import React from "react";
import workhereStyle from "./WorkHere.module.css";
import { Link } from "react-router-dom";
function WorkHere(props) {
  return (
    <div className={workhereStyle.workhere}>
      <h1 className={workhereStyle.title}>Work at Domino's</h1>
      <div className={workhereStyle.section__1}>
        <h2>Want to work with us?</h2>
        <p>Are you a fellow pizza lover like our team at Domino’s? Join us!</p>
        <p>
          Domino’s was founded in the United States in 1960 and is today considered the world leader in the pizza delivery market. With over 19 000 restaurants in over 90 markets, we are a big family that keeps on growing. Our commitment is
          built on a foundation of teamwork, friendship – and of course- a great passion for pizza.
        </p>
        <p>
          Since we established our first store in Sweden in 2016, we have worked continuously to spread our love for great pizza across the country. Join us in the quest of providing more Swedes with the great taste of fresh, handmade
          American pizza!
        </p>
        <p>
          Click <Link>here</Link> for current vacancies.
        </p>
      </div>
    </div>
  );
}

export default WorkHere;
