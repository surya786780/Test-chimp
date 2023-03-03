import React, { useState } from "react";
import { Link } from "react-router-dom";

function MyCandidateNotAssigned() {
  return (
    <div>
      <div className="nothingImg">
        <div className="archieveComp">
          <img
            src="https://app.testgorilla.com/assets/telescopio.svg"
            alt=""
            className="archiveImg"
          />
        </div>
        <p className="noArchieve archieveComp">
          You don't have any candidates yet.
        </p>
        <p className="noArchieve archieveComp">
          <Link to={"/customer/assessment/name-assessment"} className="link">
            <span className="crt">Create an assessment</span>{" "}
          </Link>
          and invite candidates to take it.
        </p>
      </div>
    </div>
  );
}

export default MyCandidateNotAssigned;
