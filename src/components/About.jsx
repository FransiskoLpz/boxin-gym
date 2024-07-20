import React from "react";
import aboutImage from "../images/about.png";

function About() {
  return (
    <div id="about">
      <div className="about-image">
        <img src={aboutImage} alt="" />
      </div>
      <div className="about-text">
        <h1>LEARN ABOUT US</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          est ad necessitatibus ratione placeat ipsum iure veritatis. Accusamus
          aut ab voluptas repudiandae, pariatur qui assumenda.
        </p>
        <button>READ MORE</button>
      </div>
    </div>
  );
}

export default About;
