import React from "react";

function CreateNewAssessmentBtn() {
  return (
    <div className="createNew d-flex justify-content-between  assessment">
      <p className="">My assessment</p>
      <div className="Plusicon">
        <span className="material-symbols-outlined">add_circle</span>
        Create new assessment
      </div>
    </div>
  );
}

export default CreateNewAssessmentBtn;
