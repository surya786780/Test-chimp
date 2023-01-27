import React, { useState, useRef } from "react";
import "../CreateAccount/CreateAccount.css";
import "./Signup_Details.css";
import Logo from "../../assets/testgorilla.svg";
import TextField from "@mui/material/TextField";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
const emailSchema = Yup.object().shape({
  email: Yup.string()
    .required("!This field is required")
    .email("Invalid format"),
  firstName: Yup.string().required("!First Name is required"),
  lastName: Yup.string().required("!Last Name is required"),
  phoneNumber: Yup.string().required("!Phone number is required"),
  companyName: Yup.string().required("!Company name is required"),
  // firstName: Yup.string().required("!This field is required"),
});

function Signup_Details() {
  const [err, setErr] = useState(0);
  function showData(v) {
    console.log(v);
  }
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
            <div className="textboxs ">
              <Formik
                validationSchema={emailSchema}
                initialValues={{ email: "", firstName: "" }}
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
                            label="First Name *"
                            name="firstName"
                            value={form.values.firstName}
                            onChange={form.handleChange("firstName")}
                            onBlur={form.handleBlur("firstName")}
                            error={err == 1 ? `${"error"}` : ""}
                          />
                          {(() => {
                            if (
                              form.touched.firstName &&
                              form.errors.firstName
                            ) {
                              setErr(1);
                              return (
                                <Typography
                                  variant="caption"
                                  sx={{ color: "red" }}
                                >
                                  {`${form.errors.firstName}`}
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
            <div className="textboxs fields">
              <Formik
                validationSchema={emailSchema}
                initialValues={{ email: "", lastName: "" }}
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
                            label="Last Name *"
                            name="lastName"
                            value={form.values.lastName}
                            onChange={form.handleChange("lastName")}
                            onBlur={form.handleBlur("lastName")}
                            error={err == 1 ? `${"error"}` : ""}
                          />
                          {(() => {
                            if (form.touched.lastName && form.errors.lastName) {
                              setErr(1);
                              return (
                                <Typography
                                  variant="caption"
                                  sx={{ color: "red" }}
                                >
                                  {`${form.errors.lastName}`}
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
            <div className="textboxs fields">
              <Formik
                validationSchema={emailSchema}
                initialValues={{ email: "", firstName: "" }}
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
                            label="Phone number *"
                            name="phoneNumber"
                            value={form.values.phoneNumber}
                            onChange={form.handleChange("phoneNumber")}
                            onBlur={form.handleBlur("phoneNumber")}
                            error={err == 1 ? `${"error"}` : ""}
                          />
                          {(() => {
                            if (
                              form.touched.phoneNumber &&
                              form.errors.phoneNumber
                            ) {
                              setErr(1);
                              return (
                                <Typography
                                  variant="caption"
                                  sx={{ color: "red" }}
                                >
                                  {`${form.errors.phoneNumber}`}
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
            <div className="textboxs fields">
              <Formik
                validationSchema={emailSchema}
                initialValues={{ email: "", companyName: "" }}
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
                            label="Company Name *"
                            name="companyName"
                            value={form.values.companyName}
                            onChange={form.handleChange("companyName")}
                            onBlur={form.handleBlur("companyName")}
                            error={err == 1 ? `${"error"}` : ""}
                          />
                          {(() => {
                            if (
                              form.touched.companyName &&
                              form.errors.companyName
                            ) {
                              setErr(1);
                              return (
                                <Typography
                                  variant="caption"
                                  sx={{ color: "red" }}
                                >
                                  {`${form.errors.companyName}`}
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
            {/* <div className="textboxs fields">
              <Formik
                validationSchema={emailSchema}
                initialValues={{ email: "", firstName: "" }}
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
                            label="First Name *"
                            name="firstName"
                            value={form.values.firstName}
                            onChange={form.handleChange("firstName")}
                            onBlur={form.handleBlur("firstName")}
                            error={err == 1 ? `${"error"}` : ""}
                          />
                          {(() => {
                            if (
                              form.touched.firstName &&
                              form.errors.firstName
                            ) {
                              setErr(1);
                              return (
                                <Typography
                                  variant="caption"
                                  sx={{ color: "red" }}
                                >
                                  {`${form.errors.firstName}`}
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
            </div> */}
            <TextField
              className="mb-4"
              fullWidth
              label="What is your job title?"
              id="outlined-error-helper-text fullWidth"
            />
            <TextField
              className="mb-4"
              fullWidth
              label="What Applicant Tracking System are you using?"
              id="outlined-error-helper-text fullWidth"
            />
            <div className="resetPwd mt-4 d-flex justify-between">
              <div className="checkBx">
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked color="success" />}
                  />
                </FormGroup>
              </div>

              <div className="occational">
                Yes, send me occasional emails about TestGorilla’s products and
                services. (You can unsubscribe at any time).
              </div>
            </div>
            <div className="redirectLink">
              <div className="createAcc mt-4">
                <div>Next</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup_Details;
