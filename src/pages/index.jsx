import React from "react";
import LandingFooter from "../components/LandingFooter/LandingFooter";
import LandingNav from "../components/LandingNav/LandingNav";
import LandingPageBody from "../components/LandingPageBody/LandingPageBody";
// import VideoAd from "../components/VideoAd/VideoAd";
import { Link } from "react-router-dom";
function index() {
  return (
    <>
      <div className="">
        <div className="loginNav d-flex justify-content-between pt-2 pb-2">
          <div className="lang d-flex align-items-center">
            <span className="material-symbols-outlined pe-2">language</span>EN
          </div>
          <div className="help-and-login">
            <span className="me-4">Help</span>
            <span className="me-2 login-btn">
              <Link to={"/login"}>Log in</Link>
            </span>
          </div>
        </div>
        <LandingNav />
      </div>
      <LandingPageBody />
      {/* <VideoAd /> */}
      <LandingFooter />
    </>
  );
}

export default index;
