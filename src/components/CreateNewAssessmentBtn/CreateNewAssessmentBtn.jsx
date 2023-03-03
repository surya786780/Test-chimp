import React from "react";

import { Link } from "react-router-dom";

function CreateNewAssessmentBtn() {
  return (
    <div className="createNew d-flex justify-content-between  assessment">
      <p className="">My assessment</p>{" "}
      <Link
        to="/customer/assessment/name-assessment"
        className="link pt-2 pb-2"
      >
        <div className="Plusicon cursor-pointer createAcc">
          <span className="material-symbols-outlined">add_circle</span>
          Create new assessment
        </div>
      </Link>
    </div>
  );
}

export default CreateNewAssessmentBtn;
