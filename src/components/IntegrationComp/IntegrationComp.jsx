import React from "react";
import FullProfile from "../../pages/FullProfile";
import IntegrationCards from "../IntegrationCards/IntegrationCards";
import Navbar from "../Navbar/Navbar";
import SupportBtn from "../SupportBtn";

function IntegrationComp() {
  return (
    <>
      <Navbar />
      <div className="innerProfile bg-gray">
        <FullProfile />
        <div className="integrationComp bg-white pt-4 sub-comps">
          <p className="ats ps-5">
            Choose the ATS you would like to integrate with TestGorilla
          </p>

          <div className="d-flex justify-content-between p-5">
            <IntegrationCards
              imgSrc={"https://app.testgorilla.com/assets/integrations/bhn.png"}
            />
            <IntegrationCards
              imgSrc={"https://app.testgorilla.com/assets/integrations/bhn.png"}
            />
            <IntegrationCards
              imgSrc={"https://app.testgorilla.com/assets/integrations/bhn.png"}
            />
            <IntegrationCards
              imgSrc={"https://app.testgorilla.com/assets/integrations/bhn.png"}
            />
          </div>
        </div>
        <div className="footer"></div>
      </div>
      <SupportBtn />
    </>
  );
}

export default IntegrationComp;
