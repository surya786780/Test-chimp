import React, { useState } from "react";
import Logo from "../../assets/testgorilla.svg";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import axios from "axios";
import "./CreateAccount.css";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { Typography } from "@mui/material";

const emailSchema = Yup.object().shape({
  email: Yup.string()
    .required("!This field is required")
    .email("Invalid format"),
});

function CreateAccount() {
  const [err, setErr] = useState(0);
  const [mail, setMail] = useState("");
  const [status, setStatus] = useState("! field is required");

  function sendMail() {
    //! /registration/validateEmail  - java
    //! /register  - node
    axios
      .post(`${import.meta.env.VITE_API_KEY}/register`, {
        email: mail,
      })
      .then((response) => {
        console.log(response);
        setStatus(response.data.message);
      })
      .catch((res) => console.log(res));
  }
  return (
    <div className="login">
      <div className="innerLogin">
        <div className="center-container">
          <img className="logo" src={Logo} alt="" />
          <p className="freePlan">Get started with your Free plan.</p>

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
              {/* <TextField
                fullWidth
                error
                label="Work Email"
                id="outlined-error-helper-text fullWidth"
                helperText={`${status}`}
                onChange={(e) => {
                  setMail(e.target.value);
                }}
              /> */}
              <div className="textboxs ">
                <Formik
                  validationSchema={emailSchema}
                  initialValues={{ email: "" }}
                  onSubmit={(values) => {
                    console.log(values);
                  }}
                >
                  <Form>
                    <Field>
                      {({ field, form }) => {
                        return (
                          <>
                            <TextField
                              fullWidth
                              label="Work Email *"
                              name="email"
                              id="fullWidth"
                              value={form.values.email}
                              onChange={form.handleChange("email")}
                              onBlur={form.handleBlur("email")}
                              error={err == 1 ? `${"error"}` : ""}
                            />
                            {(() => {
                              if (form.touched.email && form.errors.email) {
                                setErr(1);
                                return (
                                  <Typography
                                    variant="caption"
                                    sx={{ color: "#D42F2F" }}
                                  >
                                    {`${form.errors.email}`}
                                  </Typography>
                                );
                              } else setErr(0);
                            })()}
                          </>
                        );
                      }}
                    </Field>
                  </Form>
                </Formik>
              </div>
              {/* <span className="material-symbols-outlined mailIcon">mail</span> */}
            </div>
            <div className="createAcc mt-4" onClick={sendMail}>
              <Link to="/customer-info">
                <div>Create my Account</div>
              </Link>
            </div>
            <div className="loginLink d-flex">
              Already have a TestGorilla account?
              <div className="redirect">
                <Link to="/login">Log in</Link>
              </div>
            </div>

            <div className="terms">
              By creating an account, you confirm that you have read and agree
              to TestGorilla's <span>terms of use</span> and{" "}
              <span>privacy policy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
