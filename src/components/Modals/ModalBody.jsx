import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FormControl, FormHelperText, MenuItem, Select } from "@mui/material";
import Modals from "./Modals";

export function EditMember({ remove }) {
  const [access, setAccess] = useState("1");

  const handleChange = (event) => {
    setAccess(event.target.value);
  };
  function removeMember() {
    console.log("wee");
    <ModalBody remove={true} />;
  }

  return (
    <div className="modal-body modalBody">
      {remove == true ? (
        <></>
      ) : (
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "100ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div className="fields d-flex">
            <TextField
              id="outlined-basic"
              label="Teammate's worm email"
              variant="outlined"
              //   onChange={handleChange}
              className="inputFieldAddMember"
            />
            <FormControl sx={{ m: 0, minWidth: 50 }}>
              <Select
                value={access}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                className="selectTeamMember"
              >
                <MenuItem value={1}>
                  <span className="p-head">Hiring Manager</span>
                </MenuItem>
                <div className="menuItems">
                  <span className="ms-3 p-body">Read only Access</span>
                </div>
                <MenuItem value={2}>
                  <span className="p-head">Recruiter</span>
                </MenuItem>
                <div className="menuItem">
                  <span className="ms-3 p-body">
                    Full access rights to assessment and candidates.
                  </span>
                </div>
                <MenuItem value={3}>
                  <span className="p-head">Admin</span>
                </MenuItem>
                <div className="menuItems">
                  <span className="ms-3 p-body">
                    Controls access to recruiters and hiring managers.
                  </span>
                </div>
              </Select>
            </FormControl>
            <div
              className="closeAddMember cursor-pointer"
              onClick={removeMember}
            >
              <span className="m-3 text-center material-symbols-outlined">
                close
              </span>
            </div>
          </div>
        </Box>
      )}
    </div>
  );
}

function ModalBody({ remove }) {
  let [arr, setArr] = useState([1]);
  console.log(remove);
  function addMemberDiv() {
    if (arr.length < 5) setArr((arr) => [...arr, `${arr.length}`]);
    console.log(arr);
  }

  if (remove == true) {
    setArr([arr.slice(0, arr.length - 1)]);
  }
  return (
    <>
      {arr.map((e, index) => {
        if (index < 5 && e.index == true) console.log(e);
        return (
          <div key={index}>
            {remove == true ? (
              <EditMember remove={true} />
            ) : (
              <EditMember remove={false} />
            )}
          </div>
        );
      })}

      <div
        className="ms-3 addMore align-items-center d-flex p-4 "
        onClick={addMemberDiv}
      >
        <span className="material-symbols-outlined pe-2 cursor-pointer">
          add_circle
        </span>
        <span className="cursor-pointer">Add more ({`${arr.length}`}/5)</span>
      </div>
    </>
  );
}

export default ModalBody;
