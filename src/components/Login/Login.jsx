import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import Logo from "../../assets/testgorilla.svg";

import "../CreateAccount/CreateAccount.css";
import "./Login.css";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [req, setRequired] = useState(0);
  const [open, setOpen] = useState(false);
  const [mail, setMail] = useState("");
  const [pwd, setPwd] = useState("");
  const [status, setStatus] = useState("");
  const [mailData, setMailData] = useState({
    email: "",
    password: "",
  });
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    if (req == 0) {
    }
    setOpen(!open);
  };

  function sendData() {
    setMailData({
      email: mail,
      password: pwd,
    });
    console.log(mailData);
    axios
      .post(`${import.meta.env.VITE_API_KEY_JAVA}/user-service/login`, mailData)
      .then((res) => {
        if (res.data.status === "SUCCESS") {
          console.log(res.headers.authorization);
          localStorage.setItem("token-login", res.headers.authorization);
          setOpen(false);
          values["userId"] = res.data.data.id;
          navigate("/assessment", { replace: true });
        }
      })
      .catch((err) => {
        setOpen(false);
        setStatus(err.response.data.error.message);
      });
  }

  return (
    <div>
      <div className="login">
        {status}

        <div className="innerLogin">
          <div className="center-container">
            <img className="logo" src={Logo} alt="" />
            <p className="freePlan">We are glad to see you again.</p>

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
                  required
                  fullWidth
                  label="Email "
                  name="email"
                  id="outlined-error-helper-text fullWidth"
                  onChange={(e) => {
                    setMail(e.target.value);
                  }}
                />
                {/* <span className="material-symbols-outlined mailIcon">mail</span> */}
              </div>

              <div className="passwordField mt-4">
                <FormControl sx={{ m: 0, width: "57ch" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password *
                  </InputLabel>
                  {/* <TextField helperText="! This field is Required."></TextField> */}
                  <OutlinedInput
                    id="outlined-adornment-password "
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    name="password"
                    label="Password"
                    onChange={(e) => {
                      setPwd(e.target.value);
                    }}
                  />
                </FormControl>
              </div>
              <div className="resetPwd mt-4 d-flex justify-between">
                <div className="checkBx">
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox defaultChecked color="success" />}
                      label="Keep me logged in"
                    />
                  </FormGroup>
                </div>

                <div className="reset">
                  <Link to="/forgot-password">set or reset password</Link>
                </div>
              </div>

              <div className="link-setting" onClick={sendData}>
                <div className="createAcc" onClick={handleToggle}>
                  Log in
                </div>
              </div>

              <div className="createAccLink d-flex">
                Don't have an account?
                <div className="redirectLog">
                  <Link to="/">Create one here.</Link>
                </div>
              </div>

              <div className="createAccLink">
                Are you candidate?
                <span className="supportSpan">
                  <a href="https://support.testgorilla.com/hc/en-us/articles/9028804621467">
                    Click here for support
                  </a>
                </span>
              </div>

              <Backdrop
                sx={{
                  color: "#fff",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={open}
                // onClick={handleClose}
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

export default Login;
