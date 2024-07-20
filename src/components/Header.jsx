import React from "react";

function Header() {
  return (
    <div id="main">
      <div className="pr-heading">
        <h2>WELCOME TO</h2>
        <h1>
          Zamora's Heavy Hitters <span>Boxing Gym</span>
        </h1>
        <p className="details">
          Build you body and fitness with professional touch
        </p>
        <div className="header-btns">
          <a href="#" className="header-btn">
            Join Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
