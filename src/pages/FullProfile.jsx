import React from "react";
import { Link } from "react-router-dom";
import {
  profileValue,
  profileRoutes,
} from "../components/Contents/NavContents";

import "../styles/FullProfile.css";

function FullProfile() {
  return (
    <div className="sub-comps">
      <div className="splitComp">
        <div className="topBar d-flex cursor-pointer">
          {profileValue.map((e, index) => {
            if (index < 7) {
              return (
                <Link to={profileRoutes[index]} className="link" key={index}>
                  <div className="topBarContents">{e}</div>
                </Link>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default FullProfile;
