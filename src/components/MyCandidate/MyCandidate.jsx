import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const currencies = [
  {
    value: "No option selected",
    label: "no",
  },
];
function MyCandidate() {
  return (
    <div>
      <div className="inputBx d-flex">
        <div className="searchBox">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { width: "50ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Search any candidate by name"
              variant="outlined"
            />
          </Box>
        </div>
        <div className="dropDownBx">
          <TextField
            id="outlined-select-currency"
            select
            label="Assessment"
            defaultValue="Assessment"
            // helperText="Please select your Assessment"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id="outlined-select-currency"
            select
            label="Test"
            defaultValue="Assessment"
            // helperText="Please select your Assessment"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id="outlined-select-currency"
            select
            label="Job role"
            defaultValue="Assessment"
            // helperText="Please select your Assessment"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </div>
      <div className="nothingImg">
        <div className="archieveComp">
          <img
            src="https://app.testgorilla.com/assets/telescopio.svg"
            alt=""
            className="archiveImg"
          />
        </div>
        <p className="noArchieve archieveComp">
          You don't have any candidates yet.
        </p>
        <p className="noArchieve archieveComp">
          <span className="crt">Create an assessment</span> and invite
          candidates to take it.
        </p>
      </div>
    </div>
  );
}

export default MyCandidate;
