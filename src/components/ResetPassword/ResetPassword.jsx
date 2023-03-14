import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Logo from "../../assets/testgorilla.svg";
import TextField from "@mui/material/TextField";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "react-toastify";
import "./ResetPassword.css";

function ResetPassword() {
  const [email, setMail] = useState("");
  const token = localStorage.getItem("token");

  async function sendLink() {
    console.log(email);
    try {
      const url = `${
        import.meta.env.VITE_API_KEY_NODE
      }/user-service/users/forgot-password?token=${token}`;
      const userData = await axios.post(url, { email });
      const { status } = userData.data || {};

      if (status === "SUCCESS") {
        setOpen(false);
        console.log(userData);
        toast.success("Link sent successfully", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        // navigate("/assessment", { replace: true });
      }
    } catch (e) {
      setOpen(false);
      console.error(e);
      toast.error("Error! try again sometimes", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }
  const [open, setOpen] = useState(false);
  const [req, setRequired] = useState(0);

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    if (req == 0) {
    }
    setOpen(!open);
  };

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
                  required
                  fullWidth
                  label="Work Email"
                  id="outlined-error-helper-text fullWidth"
                  onChange={(e) => {
                    setMail(e.target.value);
                  }}
                />
                {/* <span className="material-symbols-outlined mailIcon">mail</span> */}
              </div>

              <div
                className="reset-link createAcc"
                onClick={() => {
                  sendLink();
                  handleToggle();
                }}
              >
                {" "}
                send reset link
              </div>

              <div className="redirectLink text-center">
                <Link to="/login" className="link">
                  Go back to log in
                </Link>
              </div>
              <Backdrop
                sx={{
                  color: "#fff",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={open}
              >
                <CircularProgress color="inherit" />
              </Backdrop>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
