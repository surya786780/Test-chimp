import React, { useState, useRef, useContext } from "react";
import "../CreateAccount/CreateAccount.css";
import "./CustomerInfo.css";
import Logo from "../../assets/testgorilla.svg";
import TextField from "@mui/material/TextField";
import { Formik } from "formik";
import { Typography } from "@mui/material";
import { UserContext } from "../../pages/Router";
import { useNavigate } from "react-router-dom";

function Signup_Details() {
  const [data, setData] = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <div className="login">
      <div className="innerLogin">
        <div className="center-container">
          <img className="logo" src={Logo} alt="" />
          <p className="freePlan">Tell us more about yourself.</p>
          <span className="offers">
            This helps us tailor our offering to your hiring needs.
          </span>

          <div className="mailAuths">
            <div className="outlinedBox d-flex mt-4"></div>
            <div className="textboxs">
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  phoneNumber: "",
                  companyName: "",
                  jobTitle: "",
                  appTrackSystemId: "",
                }}
                onSubmit={(values, actions) => {
                  setData({ ...values, ...data });
                  navigate("/company-size", { replace: true });
                }}
              >
                {(props) => (
                  <form onSubmit={props.handleSubmit}>
                    <TextField
                      className="field"
                      fullWidth
                      label="First Name"
                      name="firstName"
                      value={props.values.firstName}
                      onChange={props.handleChange("firstName")}
                      onBlur={props.handleBlur("firstName")}
                      error={
                        props.touched.firstName && props.errors.firstName
                          ? true
                          : false
                      }
                      required
                    />
                    {(() => {
                      if (props.touched.firstName && props.errors.firstName) {
                        return (
                          <Typography
                            variant="caption"
                            sx={{ color: "#D42F2F" }}
                          >
                            {`${props.errors.firstName}`}
                          </Typography>
                        );
                      }
                    })()}

                    <TextField
                      className="field"
                      fullWidth
                      label="Last Name"
                      name="lastName"
                      value={props.values.lastName}
                      onChange={props.handleChange("lastName")}
                      onBlur={props.handleBlur("lastName")}
                      error={
                        props.touched.lastName && props.errors.lastName
                          ? true
                          : false
                      }
                      required
                    />

                    <TextField
                      className="field"
                      fullWidth
                      label="Phone Number"
                      name="phoneNumber"
                      value={props.values.phoneNumber}
                      onChange={props.handleChange("phoneNumber")}
                      onBlur={props.handleBlur("phoneNumber")}
                      error={
                        props.touched.phoneNumber && props.errors.phoneNumber
                          ? true
                          : false
                      }
                      required
                    />

                    <TextField
                      className="field"
                      fullWidth
                      label="Company Name"
                      name="companyName"
                      value={props.values.companyName}
                      onChange={props.handleChange("companyName")}
                      onBlur={props.handleBlur("companyName")}
                      error={
                        props.touched.companyName && props.errors.companyName
                          ? true
                          : false
                      }
                      required
                    />
                    <TextField
                      className="field"
                      fullWidth
                      label="What is your Job title?"
                      name="jobTitle"
                      value={props.values.jobTitle}
                      onChange={props.handleChange("jobTitle")}
                      onBlur={props.handleBlur("jobTitle")}
                    />
                    <TextField
                      className="field"
                      fullWidth
                      label="What Applicant Tracking System are you using?"
                      name="appTrackSystemId"
                      value={props.values.appTrackSystemId}
                      onChange={props.handleChange("appTrackSystemId")}
                      onBlur={props.handleBlur("appTrackSystemId")}
                    />

                    <div className="redirectLink  createAcc mt-4">
                      <button type="submit" className="butn">
                        Next
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup_Details;
