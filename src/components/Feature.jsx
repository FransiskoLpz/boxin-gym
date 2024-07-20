import React from "react";
import Featurebox from "./Featurebox";
import fimage1 from "../images/1.svg";
import fimage2 from "../images/2.svg";
import fimage3 from "../images/3.svg";
import fimage4 from "../images/4.svg";

function Feature() {
  return (
    <div id="features">
      <h1>About Us</h1>
      <p>
        Welcome to Zamora's Heavy Hitters, your premier boxing gym in Port St.
        Lucie. At Zamora's Heavy Hitters, we are dedicated to providing a
        challenging and supportive environment for boxers of all levels. Our
        expert trainers, state-of-the-art facilities and inclusive community
        will help you improve your skills, improve your fitness and build
        confidence. Join us to experience the transformative power of boxing and
        become part of our passionate and encouraging family.
      </p>
      <div className="a-container">
        <Featurebox image={fimage1} title="WeightLifting" />
        <Featurebox image={fimage2} title="Specific Muscle" />
        <Featurebox image={fimage3} title="Flex Your Muscle" />
        <Featurebox image={fimage4} title="Cardio Exercise" />
      </div>
    </div>
  );
}

export default Feature;
