import React from "react";
import "./Contact.css";

function Contact() {
  const spacing = 1.5;

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
        {/* <iframe
          title="Google Maps Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113463.58721233386!2d-80.44533041371777!3d27.29011096967346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88deeaeff6c50ead%3A0xf44a54f9de7e10e0!2sPort%20St.%20Lucie%2C%20Florida%2C%20EE.%20UU.!5e0!3m2!1ses!2sni!4v1725153772368!5m2!1ses!2sni"
          width="600"
          height="450"
          style={{ marginRight: `${spacing}em` }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="contact-map"
        ></iframe> */}
      </div>
    </div>
  );
}

export default Contact;
