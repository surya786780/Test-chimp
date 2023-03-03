import React, { useState, useEffect, Fragment } from "react";

import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";

import SupportBtn from "../SupportBtn";
import SaveChangesBtn from "../SaveChangesBtn/SaveChangesBtn";
import FullProfile from "../../pages/FullProfile";
import Navbar from "../Navbar/Navbar";

function MyProfile() {
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [phNo, setPhNo] = useState();
  const [details, setDetails] = useState({
    language: "",
    jobRole: "",
    testType: "",
  });

  useEffect(() => {
    const d = localStorage.getItem("userDetails");
    const values = JSON.parse(d);
    console.log(d);
    setName(values.firstName);
    setLastName(values.lastName);
    setPhNo(values.phoneNumber);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Fragment>
      {name || lastName || phNo ? (
        <Fragment>
          <Navbar />
          <div className="innerProfile bg-gray">
            <FullProfile />
            <div className="myProfile sub-comps ">
              <div className="personalInfo">
                <p className="mb-3">Personal information</p>
                <div className="infoBox">
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 0, width: "65ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="outlined-basic"
                      label="First name"
                      variant="outlined"
                      className="me-4"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Last name"
                      variant="outlined"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Phone number"
                      variant="outlined"
                      className="mt-4"
                      value={phNo}
                      onChange={(e) => setPhNo(e.target.value)}
                      // value={values.phoneNumber}
                    />
                  </Box>
                </div>

                <div className="langSelect">
                  <p className="mb-2">Language Selection</p>
                  <span className="mb-1">
                    Choose the language in which you'd like to use TestGorilla.
                    You will also receive communications in this language.
                  </span>
                  <FormControl
                    sx={{ mb: 3, minWidth: "65ch" }}
                    className="mt-3"
                  >
                    <InputLabel id="demo-select-small">Language</InputLabel>
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      value={details.language}
                      label="Language"
                      onChange={handleChange}
                      name="language"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"Tamil"}>Tamil</MenuItem>
                      <MenuItem value={"English"}>English</MenuItem>
                      <MenuItem value={"Arabic"}>Arabic</MenuItem>
                    </Select>
                  </FormControl>
                  <div className="saveChangesBtn mb-3">
                    <Grid
                      container
                      direction="row"
                      spacing={2}
                      className="mb-3"
                    >
                      <Grid item>
                        <Tooltip
                          disableFocusListener
                          disableTouchListener
                          title="Your gmail is connected with google account , you cannot change your password"
                        >
                          <Button>Change password</Button>
                        </Tooltip>
                      </Grid>
                      <Grid item></Grid>
                      <Grid item>
                        <Tooltip
                          disableFocusListener
                          disableTouchListener
                          title="Your gmail is connected with google account , you cannot change your email"
                        >
                          <Button>Change email</Button>
                        </Tooltip>
                      </Grid>
                      <Grid item></Grid>
                    </Grid>
                  </div>
                  <SaveChangesBtn />
                </div>
              </div>
            </div>
            <div className="footer"></div>
          </div>
          <SupportBtn />
        </Fragment>
      ) : (
        <Fragment>Loading...</Fragment>
      )}
    </Fragment>
  );
}

export default MyProfile;
