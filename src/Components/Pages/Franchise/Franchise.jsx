import React from "react";
import franchiseStyle from "./Franchise.module.css";
function Franchise(props) {
  return (
    <div className={franchiseStyle.franchise}>
      <h1 className={franchiseStyle.title}>Franchises</h1>

      <div className={franchiseStyle.section__1}>
        <h2>Build your Pizza Empire</h2>
        <p>
          At Domino’s Sweden we’re always looking for new, innovative people driven by ambition and teamwork. As a franchisee for us, you will have the world’s leading pizza delivery brand by your side and a professional organisation as
          your partner. Sounds great, right? Join us in the quest of providing more Swedes with the great taste of fresh, handmade American pizza!
        </p>
        <h3>Are you our next franchisee?</h3>
        <p>Send an e-mail to juozas@dominos.se.</p>
      </div>

      <div className={franchiseStyle.section__2}>
        <h2>Desired competence</h2>
        <p>
          Domino’s is looking for energetic people who want to provide inspiring leadership. We think you are a creative person who’s interested in developing local marketing activities, enterprising leadership and innovative ways of
          increasing sales. Maybe you have some new ideas for the development of Domino’s Sweden?
          <br />
          As a franchisee for Dominos, your main tasks are operations and results, but foremost leading your employees in a fast-paced and fun working environment.
          <br />
          It’s beneficial if you can multitask while simultaneously leading with a safe and positive spirit. Through that, your store can maintain a high quality mindset and great teamwork. Let’s serve some amazing pizza, shall we?
        </p>
      </div>

      <div className={franchiseStyle.section__3}>
        <h2>Meet our franchisees</h2>
        <p>EMILIA BUBUIK</p>
        <li>Franchisee in Eriksberg & Frölunda.</li>
        <p>
          My journey with Dominos started as a store manager in 2019. As soon as I got the opportunity, I became the first franchisee in Sweden. The best thing about this job is that every day new challenges are waiting and there is always
          room for improvement.
        </p>
      </div>
    </div>
  );
}

export default Franchise;
