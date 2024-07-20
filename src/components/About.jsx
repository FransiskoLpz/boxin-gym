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
          Welcome to Zamora's Heavy Hitters, your premier boxing gym in Port St.
          Lucie. At Zamora's Heavy Hitters, we are dedicated to providing a
          challenging and supportive environment for boxers of all levels. Our
          expert trainers, state-of-the-art facilities and inclusive community
          will help you improve your skills, improve your fitness and build
          confidence. Join us to experience the transformative power of boxing
          and become part of our passionate and encouraging family.
        </p>
        <button>READ MORE</button>
      </div>
    </div>
  );
}

export default About;
