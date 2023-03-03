import React, { useState } from "react";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";

const columns = [
  { id: "name", label: "NAME", minWidth: 250 },
  { id: "email", label: "EMAIL", minWidth: 250 },
  {
    id: "assessment",
    label: "ASSESSMENT",
    maxWidth: 50,
  },
  {
    id: "test",
    label: "TEST",
    maxWidth: 50,
  },
  {
    id: "lastactivity",
    label: "LAST ACTIVITY >",
    maxWidth: 50,
  },
];

function createData(name, email, assessment, test, lastactivity) {
  return { name, email, assessment, test, lastactivity };
}

const rows = [
  createData("suryakumar", "suryakumar.a@codingmart.com", 1, 5, "Mar 2, 2023"),
  createData("suraj", "surajpandey@codingmart.com", 1, 5, "Mar 2, 2023"),
];

function CandidatePage() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }} className="mt-5">
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={{
                    minWidth: column.minWidth,
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody className="table-row fw-bold">
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          <Link
                            to={"/customer/candidate/candidatePage"}
                            className="link"
                          >
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </Link>
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default CandidatePage;
