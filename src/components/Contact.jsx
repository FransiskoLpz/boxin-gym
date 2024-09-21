import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div id="contact">
      <h1>CONTACT US</h1>
      <div className="contact-container">
        <form className="contact-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Type Your E-Mail" required />
          <textarea name="message" placeholder="Write Here....."></textarea>
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
