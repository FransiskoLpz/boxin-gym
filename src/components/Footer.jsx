import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="container">
      <div className="background">
        <svg version="1.1" xmlns="">
          {" "}
        </svg>
      </div>
      <section>
        <ul className="socials">
          <li>
            <a className="fa-brands fa-facebook" href=""></a>
          </li>
          <li>
            <a className="fa-brands fa-twitter" href=""></a>
          </li>
          <li>
            <a className="fa-brands fa-linkedin" href=""></a>
          </li>
          <li>
            <a className="fa-brands fa-instagram" href=""></a>
          </li>
        </ul>
        <ul className="links">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Team</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <p className="legal">2024 All rights reserved</p>
      </section>
    </div>
  );
}

export default Footer;
