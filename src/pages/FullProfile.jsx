import React, { useContext } from "react";

import { profileValue } from "../components/Contents/NavContents";
import { ComponentSelection } from "../pages/AssessmentHome";

import "../styles/FullProfile.css";

function FullProfile() {
  const [comp, setComp] = useContext(ComponentSelection);

  console.log(comp);
  return (
    <div className="splitComp">
      <div className="topBar d-flex">
        {profileValue.map((e, index) => {
          if (index < 7) {
            return (
              <div
                className="topBarContents"
                key={index}
                onClick={() => {
                  setComp(index + 4);
                }}
              >
                {e}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default FullProfile;
