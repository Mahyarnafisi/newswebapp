import React from "react";
import contactusStyle from "./ContactUs.module.css";
function ContactUs() {
  return (
    <div className={contactusStyle.contactUs}>
      <h1 className={contactusStyle.title}>Contact</h1>
      <div className={contactusStyle.section__1}>
        <p>Our customer service is open Monday - Friday 08:00-17:00 and we are working to help you as soon as possible. We strive to respond to your email within 24 hours on weekdays.</p>
      </div>

      <div className={contactusStyle.section__2}>
        <h2>Send us an email</h2>
        <button>Send email now</button>
        <p>info@dominos.se</p>
      </div>
    </div>
  );
}

export default ContactUs;
