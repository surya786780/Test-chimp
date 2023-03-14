import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import { toast } from "react-toastify";

import axios from "axios";

const style1 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 0,
};

function ChangeEmailModal({ isActivate, removeModal }) {
  const d = localStorage.getItem("userDetails");
  const values = JSON.parse(d);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("set the password");
  const [pwd, setPwd] = useState("");
  const [err, setErr] = useState("");
  // modal
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    removeModal();
  };
  // modal

  const sendResult = () => {
    console.log(email, pwd);
    handleClose();
  };
  useEffect(() => {
    if (isActivate == true) handleOpen();
  }, [isActivate]);

  // patch req
  async function saveChanges() {
    console.log("hit");
    console.log(email, pwd);

    try {
      const url = `${
        import.meta.env.VITE_API_KEY_NODE
      }/user-service/update/change_email`;
      const userData = await axios.patch(
        url,
        {
          email: email,
          password: pwd,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token") || "",
          },
        }
      );
      const status = userData.data.status || {};
      if (status === "SUCCESS") {
        values.email = userData.data.data.email;
        console.log(values);
        localStorage.setItem("userDetails", JSON.stringify(values));
        toast.success("Mail changed successfully", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        handleClose();
      }
    } catch (e) {
      setErr(e.response.data.message);
      console.error(e);
    }
  }
  // patch req

  return (
    <div className="ChangeEmailModal">
      <Modal
        open={open}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style1, width: 500 }}>
          <p className="font-big mb-4 bg-darkBlue  p-3 text-light">
            Change email address
          </p>

          <p className="font-small mb-4 ms-3">current email : {values.email}</p>

          <div className="changeMail p-3">
            <div className="input-fields">
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 0, width: "50ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <div className="mb-3">
                  <TextField
                    required
                    id="outlined-required"
                    label="New email "
                    defaultValue=""
                    size="small"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <TextField
                    required
                    id="outlined-required"
                    label="Current password "
                    defaultValue=""
                    size="small"
                    onChange={(e) => {
                      setPwd(e.target.value);
                    }}
                  />
                </div>
                <span className="danger">{err}</span>
              </Box>
            </div>
            <div className="mt-4 p-2 d-flex justify-content-end">
              <div
                className="cursor-pointer conditioned-btn modal-padding bg-gray text-dark me-3"
                onClick={handleClose}
              >
                Cancel
              </div>
              <div
                className={`invite conditioned-btn modal-padding ${
                  email.length > 12 && pwd.length > 8
                    ? "valid-btn cursor-pointer"
                    : "invalid-btn"
                }`}
                onClick={saveChanges}
              >
                Change mail
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default ChangeEmailModal;
