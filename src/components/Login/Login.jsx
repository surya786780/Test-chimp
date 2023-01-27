import React from "react";
import "./Login.css";
import Logo from "../../assets/testgorilla.svg";
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
import { Link } from "react-router-dom";
import "../CreateAccount/CreateAccount.css";
function Login() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <div className="login">
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
                  fullWidth
                  error
                  label="Email *"
                  id="outlined-error-helper-text fullWidth"
                  helperText="! This field is Required."
                  onChange={(e) => {
                    setMail(e.target.value);
                  }}
                />
                <span className="material-symbols-outlined mailIcon">mail</span>
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
                    label="Password"
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
              <div className="createAcc">Log in</div>
              <div className="createAccLink d-flex">
                Don't have an account?
                <div className="redirectLog">
                  <Link to="/">Create one here.</Link>
                </div>
              </div>

              <div className="createAccLink">
                Are you candidate?
                <span className="support">
                  <a href="https://support.testgorilla.com/hc/en-us/articles/9028804621467">
                    Click here for support
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
