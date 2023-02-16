import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function MyCandidate() {
  const [details, setDetails] = React.useState({
    assessment: "",
    test: "",
    jobRole: "",
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
          {/* <TextField
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
          </TextField> */}

          <FormControl sx={{ m: 1, minWidth: 50 }}>
            <InputLabel id="demo-select-small">Assessment</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={details.assessment}
              label="Language"
              onChange={handleChange}
              name="assessment"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Tamil"}>Tamil</MenuItem>
              <MenuItem value={"English"}>English</MenuItem>
              <MenuItem value={"Arabic"}>Arabic</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 50 }}>
            <InputLabel id="demo-select-small">Test</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={details.test}
              label="Job role"
              onChange={handleChange}
              name="test"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 50 }}>
            <InputLabel id="demo-select-small">Job role</InputLabel>
            <Select
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
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
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
