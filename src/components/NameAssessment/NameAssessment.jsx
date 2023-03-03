import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Navbar from "../Navbar/Navbar";
import CreateNewAssessment from "../CreateNewAssessment/CreateNewAssessment";
import SupportBtn from "../SupportBtn";

function NameAssessment() {
  const [details, setDetails] = useState({
    assessmentName: "",
    language: "",
    jobRole: "",
  });

  const [assessmentNameSet, setName] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevState) => ({
      ...prevState,
      [name]: value,
      assessmentName: assessmentNameSet,
    }));
    console.log(details);
  };

  return (
    <div className="sub-comps">
      <CreateNewAssessment />
      <div className="innerProfile">
        <div className="name-assessment mt-5">
          <div className=" d-flex align-items-center">
            <span className="material-symbols-outlined pe-2 fs-4">help</span>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { minWidth: 1265 },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                required
                fullWidth
                id="outlined-basic"
                label="Name your assessment "
                variant="outlined"
                name="assessmentName"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Box>
          </div>
          <div className="drop-down-box d-flex align-items-center">
            <span className="material-symbols-outlined pe-2 fs-4 pt-4">
              help
            </span>
            <FormControl sx={{ mt: 3, minWidth: 1265 }}>
              <InputLabel id="demo-select-small">language</InputLabel>
              <Select
                required
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
          </div>
          <div className="drop-down-box d-flex align-items-center">
            <span className="material-symbols-outlined pe-2 fs-4 pt-4">
              help
            </span>

            <FormControl sx={{ mt: 3, minWidth: 1265 }}>
              <InputLabel id="demo-select-small">Job role</InputLabel>
              <Select
                required
                labelId="demo-select-small"
                id="demo-select-small"
                value={details.jobRole}
                label="Test type"
                onChange={handleChange}
                name="jobRole"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"dev"}>Developer</MenuItem>
                <MenuItem value={"tester"}>Tester</MenuItem>
                <MenuItem value={"dev-ops"}>Dev ops</MenuItem>
              </Select>
            </FormControl>
            <button
              type="submit"
              onClick={() => {
                console.log(details);
              }}
            >
              send
            </button>
          </div>
        </div>
        <div className="footer"></div>
      </div>
      <SupportBtn />
    </div>
  );
}

export default NameAssessment;
