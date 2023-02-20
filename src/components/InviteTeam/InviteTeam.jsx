import React, { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import Logo from "../../assets/testgorilla.svg";
import "../CreateAccount/CreateAccount.css";
import "./InviteTeam.css";
import TextField from "@mui/material/TextField";

import { UserContext } from "../../pages/Router";
function InviteTeam() {
  const [data, setData] = useContext(UserContext);
  console.log(data);
  const navigate = useNavigate();

  function sendData() {
    navigate("/assessment", { replace: true });
  }

  return (
    <div className="login">
      <div className="innerLogin">
        <div className="center-container">
          <img className="logo" src={Logo} alt="" />
          <p className="freePlan">
            Invite your team to use TestGorilla together – for free.
          </p>
          <p className="mt-4">
            Give our premium features a trial run and assess candidates
            together.
          </p>

          <div className="invite_link">
            <TextField
              fullWidth
              label="Work Email *"
              name="email"
              id="fullWidth"
              value=""
              className="mb-4"
            />
            <TextField
              fullWidth
              label="Work Email *"
              name="email"
              id="fullWidth"
              value=""
              className="mb-4"
            />
            <TextField
              fullWidth
              label="Work Email *"
              name="email"
              id="fullWidth"
              value=""
              className="mb-4"
            />
            <TextField
              fullWidth
              label="Work Email *"
              name="email"
              id="fullWidth"
              value=""
              className="mb-4"
            />
            <div className="divs d-flex">
              <div className="skip mt-4" onClick={sendData}>
                Skip
              </div>
              <div className="m-2"></div>
              <div className="finishBtn mt-4 w-100" onClick={sendData}>
                Finish
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InviteTeam;
