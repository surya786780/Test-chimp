import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import SaveChangesBtn from "../SaveChangesBtn/SaveChangesBtn";
function AssessmentSettings() {
  return (
    <div className="myProfile">
      <div className="notificationInfo">
        <div className="info d-flex align-items-center pe-2">
          <span className="material-symbols-outlined fs-3 errIcon">error</span>
          <span className="para">
            These settings will be applied to all assessments including those
            created by other team members.
          </span>
        </div>

        <div className="notifyMe">
          <div className="checkNotify">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Request candidates anonymously to provide demographic details at the end of the assessment."
              />
              <FormControlLabel
                control={<Checkbox />}
                label=" Provide opportunity to leave feedback after every test.  "
              />
              <FormControlLabel
                control={<Checkbox />}
                label="  Redirect candidates to a URL of your choice after finishing an assessment. "
              />
            </FormGroup>
          </div>
        </div>
        <SaveChangesBtn />
      </div>
    </div>
  );
}

export default AssessmentSettings;
