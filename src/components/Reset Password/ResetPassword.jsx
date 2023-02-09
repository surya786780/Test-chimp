import React from "react";
import "./ResetPassword.css";
import Logo from "../../assets/testgorilla.svg";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
function ResetPassword() {
  return (
    <div>
      <div className="login">
        <div className="innerLogin">
          <div className="center-container">
            <img className="logo" src={Logo} alt="" />
            <p className="freePlan">Reset your password.</p>

            <div className="mailAuths">
              <div className="outlinedBox d-flex mt-4">
                <TextField
                  fullWidth
                  error
                  label="Work Email"
                  id="outlined-error-helper-text fullWidth"
                  helperText="! this field is required"
                  //   onChange={(e) => {
                  //     setMail(e.target.value);
                  //   }}
                />
                <span className="material-symbols-outlined mailIcon">mail</span>
              </div>

              <div className="redirectLink">
                <Link to="/login">Go back to log in</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
