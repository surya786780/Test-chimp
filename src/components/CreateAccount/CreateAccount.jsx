import React, { useState } from "react";
import Logo from "../../assets/testgorilla.svg";
import TextField from "@mui/material/TextField";
import { json, Link } from "react-router-dom";
import axios from "axios";
import "./CreateAccount.css";
function CreateAccount() {
  const [mail, setMail] = useState("");
  const [status, setStatus] = useState("! field is required");

  function sendMail() {
    //! /registration/validateEmail  - java
    //! /register  - node
    axios
      .post(`${import.meta.env.VITE_API_KEY}/register`, {
        email: mail,
      })
      .then((response) => {
        console.log(response);
        setStatus(response.data.message);
      })
      .catch((res) => console.log(res));
  }
  return (
    <div className="login">
      <div className="innerLogin">
        <div className="center-container">
          <img className="logo" src={Logo} alt="" />
          <p className="freePlan">Get started with your Free plan.</p>

          <div className="mailAuths">
            <div className="googleAuth d-flex">
              <img
                className="googleIcon"
                src="https://app.testgorilla.com/assets/google.svg"
                alt="google"
              />
              <span className="googleText">Continue with Google</span>
            </div>
            <div className="or d-flex">
              <div className="underlineDiv"></div> or
              <div className="underlineDiv"></div>
            </div>
            <div className="outlinedBox d-flex mt-4">
              <TextField
                fullWidth
                error
                label="Work Email"
                id="outlined-error-helper-text fullWidth"
                helperText={`${status}`}
                onChange={(e) => {
                  setMail(e.target.value);
                }}
              />
              <span className="material-symbols-outlined mailIcon">mail</span>
            </div>

            <div className="createAcc" onClick={sendMail}>
              Create my Account
            </div>
            <div className="loginLink d-flex">
              Already have a TestGorilla account?
              <div className="redirect">
                <Link to="/login">Log in</Link>
              </div>
            </div>

            <div className="terms">
              By creating an account, you confirm that you have read and agree
              to TestGorilla's <span>terms of use</span> and{" "}
              <span>privacy policy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
