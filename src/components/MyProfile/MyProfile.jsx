import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
function MyProfile() {
  return (
    <div className="myProfile">
      <div className="personalInfo">
        <p>Personal information</p>
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
          />
          <TextField id="outlined-basic" label="Last name" variant="outlined" />
          <TextField
            id="outlined-basic"
            label="Phone number"
            variant="outlined"
            className="mt-4"
          />
        </Box>
      </div>
    </div>
  );
}

export default MyProfile;
