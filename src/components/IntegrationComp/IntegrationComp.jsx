import React from "react";
import IntegrationCards from "../IntegrationCards/IntegrationCards";

function IntegrationComp() {
  return (
    <div className="integrationComp">
      <p className="ats">
        Choose the ATS you would like to integrate with TestGorilla
      </p>

      <div className="d-flex justify-content-between">
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
  );
}

export default IntegrationComp;
