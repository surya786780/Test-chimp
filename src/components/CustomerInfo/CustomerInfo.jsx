import React, { useState, useRef, useContext } from "react";
import axios from "axios";
import "../CreateAccount/CreateAccount.css";
import "./CustomerInfo.css";
import Logo from "../../assets/testgorilla.svg";
import TextField from "@mui/material/TextField";

import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { Formik } from "formik";
import { Typography } from "@mui/material";
import { UserContext } from "../../pages/Router";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Signup_Details() {
  const [data, setData] = useContext(UserContext);
  const [track, setTrack] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    const values = await axios.get(
      `${import.meta.env.VITE_API_KEY_NODE}/user-service/users/ats`
    );
    setTrack(values.data.data);
    setAts();
  };
  useEffect(() => {
    getData();
  }, []);

  const [details, setDetails] = React.useState({
    applicantTrackingSystemId: "",
  });

  const handleChange = (e) => {
    console.log(e);

    const { name, value } = e.target;
    setDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(details);
  };

  function setAts() {
    console.log("hello", track);
    track.map((value) => {
      for (let property in value) {
        console.log(`${property}: ${value[property]}`);
      }
    });
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
            <div className="textboxs">
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  phoneNumber: "",
                  companyName: "",
                  jobTitle: "",
                  applicantTrackingSystemId: "",
                }}
                onSubmit={(values, actions) => {
                  setData({ ...values, ...data });
                  console.log(data);
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
                    {/* <TextField
                      className="field"
                      fullWidth
                      label="What Applicant Tracking System are you using?"
                      name="applicantTrackingSystemId"
                      value={props.values.applicantTrackingSystemId}
                      onChange={props.handleChange("applicantTrackingSystemId")}
                      onBlur={props.handleBlur("applicantTrackingSystemId")}
                    /> */}

                    <FormControl sx={{ mt: 3, minWidth: 510 }}>
                      <InputLabel id="demo-select-small">
                        What Applicant Tracking System are you using?
                      </InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={props.values.applicantTrackingSystemId}
                        label="Applicant Tracking System"
                        onBlur={props.handleBlur("applicantTrackingSystemId")}
                        onChange={props.handleChange(
                          "applicantTrackingSystemId"
                        )}
                        name="applicantTrackingSystemId"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem
                          value={`${track[0]?.id}`}
                        >{`${track[0]?.name}`}</MenuItem>
                        <MenuItem
                          value={`${track[1]?.id}`}
                        >{`${track[1]?.name}`}</MenuItem>
                        <MenuItem
                          value={`${track[2]?.id}`}
                        >{`${track[2]?.name}`}</MenuItem>
                      </Select>
                    </FormControl>
                    <button type="submit" className="butn redirectLink">
                      <div className="createAcc mt-4 ">Next</div>
                    </button>
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
