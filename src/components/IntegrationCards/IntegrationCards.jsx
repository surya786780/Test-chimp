import React from "react";
import PremiumIcon from "../PremiumIcon/PremiumIcon";

function IntegrationCards({ imgSrc }) {
  return (
    <div className="companyCards">
      <div className="cardBodyShadow">
        <div className="cardImg d-flex justify-content-center">
          <img src={imgSrc} alt="cards" />
        </div>

        <div className="premiumBtn ">
          <div className="createAcc position-relative">
            <div className="premiumSvg position-absolute top-0 start-100 translate-middle">
              <PremiumIcon />
            </div>
            Enable
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntegrationCards;
