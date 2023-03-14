import React from "react";
import { Link, useLocation } from "react-router-dom";

import {
  profileValue,
  profileRoutes,
} from "../components/Contents/NavContents";

import "../styles/FullProfile.css";

function FullProfile() {
  // get last end point url
  const search = useLocation();
  const endPoint = search.pathname;
  // get last end point url
  return (
    <div className="sub-comps">
      <div className="splitComp">
        <div className="topBar d-flex cursor-pointer">
          {profileValue.map((e, index) => {
            if (index < 7) {
              return (
                <Link
                  to={profileRoutes[index]}
                  className={`link ${
                    endPoint == profileRoutes[index]
                      ? "fw-bold border-bottom-2"
                      : ""
                  }`}
                  key={index}
                >
                  <div className={`topBarContents `}>{e}</div>
                </Link>
              );
            } else {
              if (index == 8) {
                return <Link to={profileRoutes[index]} key={index}></Link>;
              }
              if (index == 9) {
                return <Link to={profileRoutes[index]} key={index}></Link>;
              }
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default FullProfile;
