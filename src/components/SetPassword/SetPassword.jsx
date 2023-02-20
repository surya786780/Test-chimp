import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import "../CreateAccount/CreateAccount.css";
import "./SetPassword.css";
import Logo from "../../assets/testgorilla.svg";

import { Link, useNavigate } from "react-router-dom";

function SetPassword() {
  const navigate = useNavigate();
  let [progressVal, setProgressval] = useState(0);

  const [req, setRequired] = useState(0);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    if (req == 0) {
    }
    setOpen(!open);
  };

  async function sendData(data) {
    console.log(data);
    try {
      const url = `${
        import.meta.env.VITE_API_KEY_JAVA
      }/user-service/setPassword`;
      const userData = await axios.post(url, data, {
        headers: {
          // 'Authorization': 'Bearer ' + (localStorage.getItem('token')) || ''
          Authorization: localStorage.getItem("token") || "",
        },
      });
      const { status } = userData.data || {};

      if (status === "SUCCESS") {
        handleToggle;
        setOpen(false);
        console.log(userData);
        navigate("/assessment", { replace: true });
      }
    } catch (e) {
      setOpen(false);
      console.error(e);
    }
  }
  function validatePassword(value) {
    let error = {};
    if (value.length <= 12) {
      error.characters = true;
    }
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value)) {
      error.special = true;
    }
    if (!/[A-Z]/.test(value)) {
      error.uppercase = true;
    }
    if (!/[a-z]/.test(value)) {
      error.lowercase = true;
    }
    if (!/[0-9]/.test(value)) {
      error.numeric = true;
    }
    if (JSON.stringify(error) === "{}") {
      return undefined;
    } else return error;
  }

  return (
    <div className="login">
      <div className="innerLogin">
        <div className="center-container">
          <img className="logo" src={Logo} alt="" />
          <p className="freePlan">Reset your password.</p>
          <p>To have an access to your account. </p>

          <div className="passwordField mt-4">
            <>
              <Formik
                initialValues={{
                  password: "",
                }}
                onSubmit={(values) => {
                  sendData(values);
                }}
              >
                {({ errors, touched }) => (
                  <Form className="h-[95%]">
                    <div className="p-10 flex flex-col h-[100%] content-between">
                      <div className="my-[5%] flex flex-col gap-5">
                        <Field
                          type="password"
                          validate={validatePassword}
                          name="password"
                          className="w-[100%] border-[1px] border-slate-200 rounded-[3px] p-[8px] text-slate-600 pwd"
                          placeholder="Create Password"
                        />

                        <div className="progressBar mt-4">
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: `${progressVal}%` }}
                              aria-valuenow={`${progressVal}%`}
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>

                        {
                          <p className="flex flex gap-2">
                            <div>
                              {errors?.password?.characters ? (
                                <>
                                  <div className="li mt-3">
                                    <span className="material-symbols-outlined danger">
                                      error
                                    </span>
                                    contains atleast 12 character
                                  </div>
                                </>
                              ) : (
                                <div className="d-none">
                                  {() => setProgressval(progressVal + 25)}
                                </div>
                              )}
                            </div>
                            <div>
                              {errors?.password?.special ? (
                                <>
                                  <div className="li mt-3">
                                    <span className="material-symbols-outlined danger">
                                      error
                                    </span>
                                    contains atleast one Special character
                                  </div>
                                </>
                              ) : (
                                <div className="d-none">
                                  {() => {
                                    setProgressval(progressVal + 25);
                                  }}
                                </div>
                              )}
                            </div>
                            <div>
                              {errors?.password?.uppercase ? (
                                <>
                                  <div className="li mt-3">
                                    <span className="material-symbols-outlined danger">
                                      error
                                    </span>
                                    contains atleast one Uppercase character
                                  </div>
                                </>
                              ) : (
                                <div className="d-none">
                                  {() => {
                                    setProgressval(progressVal + 25);
                                  }}
                                </div>
                              )}
                            </div>
                            <div>
                              {errors?.password?.lowercase ? (
                                <>
                                  <div className="li mt-3">
                                    <span className="material-symbols-outlined danger">
                                      error
                                    </span>
                                    contains atleast one Lowercase character
                                  </div>
                                </>
                              ) : (
                                <div className="d-none">
                                  {() => {
                                    setProgressval(progressVal + 25);
                                  }}
                                </div>
                              )}
                            </div>
                            <div>
                              {errors?.password?.numeric ? (
                                <>
                                  <div className="li mt-3">
                                    <span className="material-symbols-outlined danger">
                                      error
                                    </span>
                                    contains atleast one digit
                                  </div>
                                </>
                              ) : (
                                <div className="d-none">
                                  {() => {
                                    setProgressval(progressVal + 25);
                                  }}
                                </div>
                              )}
                            </div>
                          </p>
                        }
                      </div>
                    </div>
                    <button type="submit" className="reset-btn createAcc">
                      <div className=" ">
                        <div className="">Reset password</div>
                      </div>
                    </button>
                  </Form>
                )}
              </Formik>
            </>
          </div>

          <div className="setLog mt-3">
            <Link to="/">Go back to login.</Link>
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
  );
}

export default SetPassword;
