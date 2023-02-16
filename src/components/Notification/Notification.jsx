import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import SaveChangesBtn from "../SaveChangesBtn/SaveChangesBtn";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Notification() {
  return (
    <div className="myProfile">
      <div className="notificationInfo">
        <div className="info d-flex ">
          <span className="material-symbols-outlined fs-3 errIcon">error</span>
          <span className="para">
            The notification settings below apply to you only and not to any
            other users in this account.
            <br />
            You only receive these notifications for every active assessment.
          </span>
        </div>

        <div className="notifyMe">
          <span>Notify me...</span>
          <div className="checkNotify">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label=" Every time a candidate completes an assessment "
              />
              <FormControlLabel
                control={<Checkbox />}
                label=" Every day with a summary of candidates that completed an assessment "
              />
            </FormGroup>
            <div className="receiveSummary">
              You'll receive the daily summary at 12:00PM (GMT+0)
            </div>
          </div>
        </div>
        <SaveChangesBtn />
      </div>
    </div>
  );
}

export default Notification;
