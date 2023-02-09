import React, { useState } from "react";
import "../CreateAccount/CreateAccount.css";
import "./SetPassword.css";
import Logo from "../../assets/testgorilla.svg";

import { Link } from "react-router-dom";
import PwdValidate from "../pwd";
function SetPassword() {
  return (
    <div className="login">
      <div className="innerLogin">
        <div className="center-container">
          <img className="logo" src={Logo} alt="" />
          <p className="freePlan">Reset your password.</p>
          <p>To have an access to your account. </p>

          <div className="passwordField mt-4">
            <PwdValidate />
          </div>

          <div className="createAcc">Reset password</div>
          <div className="setLog mt-3">
            <Link to="/">Go back to login.</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SetPassword;
