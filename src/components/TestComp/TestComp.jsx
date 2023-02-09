import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FreeCard from "../FreeCard/FreeCard";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function TestComp() {
  const [details, setDetails] = React.useState({
    language: "",
    jobRole: "",
    testType: "",
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
    <div className="test">
      <div className="testComp d-flex">
        <Box component="form" noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Search anything here"
            variant="outlined"
          />
        </Box>

        {/* <TextField
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
        </TextField> */}

        <FormControl sx={{ m: 1, minWidth: 80 }}>
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
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="demo-select-small">Job role</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={details.jobRole}
            label="Job role"
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
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="demo-select-small">Test type</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={details.testType}
            label="Test type"
            onChange={handleChange}
            name="testType"
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

      <div className="cardsDiv d-flex">
        <FreeCard />
        <FreeCard />
        <FreeCard />
        <FreeCard />
      </div>
    </div>
  );
}

export default TestComp;
