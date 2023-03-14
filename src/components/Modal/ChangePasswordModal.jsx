import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const style1 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 0,
  borderRadius: 0,
};

function ChangePasswordModal({ isActivate, removeModal }) {
  // states
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [showPassword3, setShowPassword3] = useState(false);

  const [open, setOpen] = useState(false);
  const [oldPwd, setOldPwd] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const [checkPwd, CheckNewPwd] = useState("");

  // functions
  const handleClickShowPassword1 = () => setShowPassword1((show) => !show);
  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);
  const handleClickShowPassword3 = () => setShowPassword3((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    removeModal();
  };
  const sendResult = () => {
    console.log("Hello", oldPwd, newPwd, checkPwd);
    handleClose();
  };
  useEffect(() => {
    if (isActivate == true) handleOpen();
  }, [isActivate]);

  const checkPassword = () => {
    console.log(oldPwd, newPwd, checkPwd);
  };

  return (
    <div className="ChangePasswordModal">
      <Modal
        open={open}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style1, width: 500 }}>
          <p className="font-big mb-4 p-3 bg-darkBlue text-light">
            Change password
          </p>

          <div className="changeMail p-3 input-fields">
            <div className="passwordField mt-3">
              <FormControl sx={{ m: 0, width: "50ch" }} variant="outlined">
                <InputLabel
                  htmlFor="outlined-adornment-password-1"
                  size="small"
                >
                  Old password *
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password-1 "
                  type={showPassword1 ? "text" : "password"}
                  onBlur={checkPassword}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword1}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword1 ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  size="small"
                  name="password"
                  label="Password"
                  onChange={(e) => {
                    setOldPwd(e.target.value);
                  }}
                />
              </FormControl>
            </div>
            <div className="passwordField mt-4">
              <FormControl sx={{ m: 0, width: "50ch" }} variant="outlined">
                <InputLabel
                  htmlFor="outlined-adornment-password-2"
                  size="small"
                >
                  New password *
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password-2 "
                  type={showPassword2 ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword2}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword2 ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  size="small"
                  name="password"
                  label="Password"
                  onChange={(e) => {
                    setNewPwd(e.target.value);
                  }}
                />
              </FormControl>
            </div>
            <div className="passwordField mt-4">
              <FormControl sx={{ m: 0, width: "50ch" }} variant="outlined">
                <InputLabel
                  htmlFor="outlined-adornment-password-3"
                  size="small"
                >
                  Confirm password *
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password-3 "
                  type={showPassword3 ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword3}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword3 ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  size="small"
                  name="password"
                  label="Password"
                  onChange={(e) => {
                    CheckNewPwd(e.target.value);
                  }}
                />
              </FormControl>
            </div>
          </div>
          <div className="mt-3 mb-3 pe-4 d-flex justify-content-end">
            <div
              className="cursor-pointer conditioned-btn modal-padding bg-gray text-dark me-3"
              onClick={handleClose}
            >
              Cancel
            </div>
            <div
              className={`invite conditioned-btn modal-padding ${
                oldPwd.length > 10 && checkPwd === newPwd && checkPwd.length > 8
                  ? "valid-btn cursor-pointer"
                  : "invalid-btn"
              }`}
              onClick={sendResult}
            >
              Change password
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default ChangePasswordModal;
