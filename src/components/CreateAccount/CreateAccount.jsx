import React, { useContext, useState } from "react";
import Logo from "../../assets/testgorilla.svg";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import "./CreateAccount.css";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { Typography } from "@mui/material";
import { UserContext } from "../../pages/Router";

function CreateAccount() {
  const navigate = useNavigate();

  const [data, setData] = useContext(UserContext);
  const [status, setStatus] = useState("");

  const emailSchema = Yup.object().shape({
    email: Yup.string().required(""),
  });

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

  //   //! /registration/validateEmail  - java
  //   //! /register  - node

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
              <div className="textboxs ">
                <Formik
                  validationSchema={emailSchema}
                  initialValues={{ email: "" }}
                  onSubmit={(values) => {
                    console.log(values);
                    axios
                      .post(
                        `${import.meta.env.VITE_APP_KEY}/authenticate/register`,
                        values
                      )
                      .then((res) => {
                        if (res.data.status === "SUCCESS") {
                          setOpen(false);
                          values["userId"] = res.data.data.id;
                          setData({ ...values, ...data });
                          navigate("/customer-info", { replace: true });
                        }
                      })
                      .catch((err) => {
                        setOpen(false);

                        setStatus(err.response.data.error.message);
                      });
                  }}
                >
                  <Form>
                    <Field>
                      {({ field, form }) => {
                        return (
                          <>
                            <TextField
                              fullWidth
                              label="Work Email "
                              name="email"
                              id="fullWidth"
                              value={form.values.email}
                              onChange={form.handleChange("email")}
                              onBlur={form.handleBlur("email")}
                              error={
                                form.touched.email && form.errors.email
                                  ? true
                                  : false
                              }
                              required={req == 1 ? true : false}
                            />
                            {(() => {
                              if (form.touched.email && form.errors.email) {
                                return (
                                  <Typography
                                    variant="caption"
                                    sx={{ color: "#D42F2F" }}
                                  >
                                    {`${form.errors.email}`}
                                  </Typography>
                                );
                              }
                            })()}
                          </>
                        );
                      }}
                    </Field>
                    <p className="status">{status}</p>
                    <div className="createAcc mt-4">
                      <button
                        type="submit"
                        className="subBtn"
                        onClick={handleToggle}
                      >
                        Create my Account
                      </button>
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
                  </Form>
                </Formik>
              </div>
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
