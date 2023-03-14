import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../Navbar/Navbar";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import "../../styles/Candidate.css";
import CandidateAssessmentReview from "../CandidateAssessmentReview/CandidateAssessmentReview";

function CandidateTestData() {
  const d = localStorage.getItem("userDetails");
  const values = JSON.parse(d);

  const [details, setDetails] = React.useState({
    assignmentInvite: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(details);
  };

  return (
    <div className="create-new-assessment">
      <Navbar />
      <div className="innerProfile bg-gray">
        <div className=" pt-4 d-flex justify-content-between sub-comps pb-5  border-bottem">
          <div className="back-nav d-flex fs-6">
            <Link to="/customer/candidate" className="link">
              <div className="border bg-white me-4 cursor-pointer">
                <span className="material-symbols-outlined fs-3 back-arrow">
                  chevron_left
                </span>
              </div>
            </Link>

            <div className="">
              <span className="fs-5 fw-bold">
                {values.firstName + values.lastName}
              </span>
              <div className="title-assessment d-flex">
                <p className=" pe-3">{values.email}</p>
              </div>
            </div>
          </div>
          <div className="next-step pe-5 d-flex">
            <div className="">
              <FormControl sx={{ m: 1, minWidth: 300 }}>
                <InputLabel id="demo-select-small">
                  Invite for an assignment
                </InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={details.assignmentInvite}
                  label="Invite for an assignment"
                  onChange={handleChange}
                  name="assignmentInvite"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"Tamil"}>React</MenuItem>
                  <MenuItem value={"English"}>Angular</MenuItem>
                  <MenuItem value={"Arabic"}>JS</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div
              className={`invite conditioned-btn ${
                details.assignmentInvite.length > 0
                  ? "valid-btn cursor-pointer"
                  : "invalid-btn"
              }`}
            >
              Invite
            </div>
          </div>
        </div>
        <CandidateAssessmentReview />
      </div>
    </div>
  );
}

export default CandidateTestData;
