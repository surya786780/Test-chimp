import React, { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import Logo from "../../assets/testgorilla.svg";
import "../CreateAccount/CreateAccount.css";
import "./InviteTeam.css";
import TextField from "@mui/material/TextField";

import axios from "axios";
import { UserContext } from "../../pages/Router";

function InviteTeam() {
  const [data, setData] = useContext(UserContext);
  console.log(data);
  const navigate = useNavigate();

  async function sendData() {
    console.log("hitt");
    // axios
    //   .post(`${import.meta.env.VITE_APP_KEY}/authenticate/signup`, data)
    //   .then((res) => {
    //     if (res.data.status === "SUCCESS") {
    //       console.log(res);
    //       navigate("/assessment", { replace: true });
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    try {
      const url = `${import.meta.env.VITE_APP_KEY}/authenticate/signup`;
      const userData = await axios.post(url, data);
      const { status } = userData.data || {};

      if (status === "SUCCESS") {
        console.log(userData);
        navigate("/assessment", { replace: true });
      }
    } catch (e) {
      console.error(e);
    }
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
