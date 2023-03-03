import React from "react";
import "../../styles/LandingPage.css";
function LandingNav() {
  return (
    <div className="landingNav d-flex text-center align-items-center ps-5 pe-5">
      <div className="navLogo">
        <img
          src="https://www.testgorilla.com/wp-content/uploads/2020/01/testgorilla-logo.png"
          alt="Logo"
        />
      </div>
      <div className="navContent d-flex justify-content-between align-items-center">
        <li className="nav-content ms-5">Product tour</li>
        <li className="nav-content">Science</li>
        <li className="nav-content">Test library</li>
        <li className="nav-content">Pricing</li>
        <li className="nav-content">Learn</li>
        <li className="nav-content pri-color">Demo</li>
        <li className="nav-content tryFreeBtn pri-bgcolor">Try for free!</li>
      </div>
    </div>
  );
}

export default LandingNav;
