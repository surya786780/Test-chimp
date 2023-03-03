import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Tables() {
  const rows = [1, 2, 3];
  const d = localStorage.getItem("userDetails");
  const values = JSON.parse(d);
  return (
    <div className="mt-4">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="fw-bold">Type</TableCell>
              <TableCell className="fw-bold" align="center">
                Name
              </TableCell>
              <TableCell className="fw-bold" align="center">
                Email
              </TableCell>
              <TableCell className="fw-bold" align="center">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <div className="sec-bgcolor p-1 w-fitContent text-light b-radius-6">
                    {values.role.type}
                  </div>
                </TableCell>
                <TableCell align="center">
                  {values.firstName + values.lastName}
                </TableCell>
                <TableCell align="center">{values.email}</TableCell>
                <TableCell align="center">
                  <div className="actions d-flex align-item-center justify-content-around">
                    <span className="material-symbols-outlined">mail</span>
                    <span className="material-symbols-outlined">edit</span>
                    <span className="material-symbols-outlined">minimize</span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Tables;
