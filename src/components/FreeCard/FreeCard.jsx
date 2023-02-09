import React from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
function FreeCard() {
  return (
    <div>
      <div className="card">
        <div className="cardHead">Enneagram</div>
        <div className="cardBody">
          <p>
            The Enneagram test follows the personality model developed in the
            teachings of O. Ichazo and C. Naranjo. The model maps out nine
            different personalities on a nine-pointed diagram describing the
            core beliefs and the worldview each one operates from.
          </p>
        </div>
        <div className="cardFooter">
          <div className="timingForTest d-flex">
            <span className="material-symbols-outlined">timer</span>
            10 mins
          </div>
          <div className="detailsForTest d-flex">
            <Tooltip title="Preview" placement="bottom">
              <IconButton>
                <span className="material-symbols-outlined">visibility</span>
              </IconButton>
            </Tooltip>
            <div className="testDetails">Details</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FreeCard;
