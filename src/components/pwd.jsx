import React, { useEffect, useReducer, useState } from "react";
import { Formik, Form, Field } from "formik";

function PwdValidate() {
  let [progressVal, setProgressval] = useState(0);
  const [resetPwd, setResetPwd] = useState("");
  console.log(resetPwd);

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
      <div className="createAcc">Reset password</div>
    </>
  );
}

function validatePassword(value) {
  console.log(value);

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
