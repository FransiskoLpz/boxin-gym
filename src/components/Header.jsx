import React, { useEffect, useState } from "react";
import { SplitText } from "./SplitText";
import { AnimatedContainer } from "./AnimatedContainer";

function Header() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simula la carga de la imagen después de 1 segundo
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div id="main" className={loaded ? "loaded" : ""}>
      <div className="pr-heading">
        <h2>WELCOME TO</h2>
        <h1>
          <div>
            <SplitText
              text="Zamora's Heavy"
              className="custom-class"
              delay={50}
              textColor="white"
            />
          </div>
          <div>
            <SplitText
              text="Hitters"
              className="custom-class"
              delay={50}
              textColor="white"
            />{" "}
            <div>
              <span className="custom-span">
                <SplitText text="Boxing Gym" delay={50} textColor="red" />
              </span>
            </div>
          </div>
        </h1>

        <p className="details">
          Build you body and fitness with professional touch
        </p>
        <AnimatedContainer reverse={true} direction="vertical" distance={100}>
          <div className="header-btns">
            <a href="#valid-link" className="header-btn">
              Join Us
            </a>
          </div>
        </AnimatedContainer>
      </div>
    </div>
  );
}

export default Header;
