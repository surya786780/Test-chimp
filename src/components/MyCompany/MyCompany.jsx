import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import PremiumIcon from "../PremiumIcon/PremiumIcon";
import SaveChangesBtn from "../SaveChangesBtn/SaveChangesBtn";
import Navbar from "../Navbar/Navbar";
import FullProfile from "../../pages/FullProfile";
import SupportBtn from "../SupportBtn";

function MyCompany() {
  const [color, setColor] = useState("#aabbcc");
  const d = localStorage.getItem("userDetails");
  const values = JSON.parse(d);

  return (
    <>
      <Navbar />
      <div className="innerProfile bg-gray">
        <FullProfile />
        <div className="myCompany sub-comps">
          <div className="colorAndLogo d-flex">
            <div className="upload position-relative">
              <div className="premiumSvg position-absolute top-0 start-100 translate-middle">
                <PremiumIcon />
              </div>
              <div className="logoUpload">
                <span className="material-symbols-outlined">person</span>
                <p>upload your company logo</p>
              </div>
            </div>
            <div className="colorPicker">
              <div className="colorCode d-flex mb-4">
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { mb: 0, width: "15ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-read-only-input"
                    label="Color"
                    value={color}
                    size="small"
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </Box>
                <div className="previewBtn ">Preview</div>
              </div>
              <div className="colorChooser position-relative">
                <HexColorPicker color={color} onChange={setColor} />
                <div className="premiumSvg position-absolute top-0 start-100 translate-middle">
                  <PremiumIcon />
                </div>
              </div>
            </div>

            <div className="companyAndCountry ">
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { mb: 0, width: "30ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-read-only-input"
                  label="Company name"
                  value={values.team.company.name}
                  size="normal"
                  className="mb-4"
                />
                <TextField
                  id="outlined-read-only-input"
                  label="Country"
                  value={""}
                  size="normal"
                />
              </Box>
            </div>
          </div>
          <div className="companyDetails">
            Give your assessments your company's look and feel.
          </div>
          <SaveChangesBtn />
        </div>
        <div className="footer"></div>
      </div>
      <SupportBtn />
    </>
  );
}

export default MyCompany;
