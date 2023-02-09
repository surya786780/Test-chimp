import React, { useEffect, useReducer, useState } from "react";
import { Formik, Form, Field } from "formik";

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
function PwdValidate() {
  const [showPassword, setShowPassword] = useState(false);
  let [progressVal, setProgressval] = useState(0);
  const [progress, setProgress] = useState(0);
  console.log(progressVal);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Formik
        initialValues={{
          password: "",
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
          </Form>
        )}
      </Formik>
    </>
  );
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

export default PwdValidate;
