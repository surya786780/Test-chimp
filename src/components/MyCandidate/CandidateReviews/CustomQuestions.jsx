import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

function createData(name, QuestionType, viewAnswer, AnswerRating) {
  return { name, QuestionType, viewAnswer, AnswerRating };
}

const rows = [
  createData(
    "What do you do when you find that you have made a mistake that affects others?",
    "Essay",
    "read",
    "star"
  ),
  createData(
    "How do you keep up to date with technology trends?",
    "Essay",
    "read",
    "star"
  ),
  createData("What makes you happy at work?", "Essay", "read", 5),
  createData(
    "What is the biggest reason you want this job?",
    "Essay",
    "read",
    "star"
  ),
];

function CustomQuestions() {
  const [value, setValue] = React.useState(0);

  return (
    <div className="custom-question-review mt-5 mb-5">
      <div className="custom-question">
        <p className="mb-5 fw-bold">custom questions</p>
      </div>

      <TableContainer
        component={Paper}
        style={{ backgroundColor: "#d4d4d43b" }}
      >
        <Table sx={{ minWidth: 600 }} aria-label="custom questions review">
          <TableHead>
            <TableRow>
              <TableCell className="fw-bold">Name</TableCell>
              <TableCell className="fw-bold" align="left">
                Question Type
              </TableCell>
              <TableCell className="fw-bold" align="left">
                view Answer
              </TableCell>
              <TableCell className="fw-bold" align="left">
                Answer Rating
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.QuestionType}</TableCell>
                <TableCell
                  align="left"
                  className="d-flex align-items-center mt-3"
                >
                  <span className="material-symbols-outlined mtop-1">
                    visibility
                  </span>
                  &nbsp; <span className=" mtop-1">{row.viewAnswer}</span>
                </TableCell>
                <TableCell align="left">
                  <Box
                    sx={{
                      "& > legend": { mt: 0 },
                    }}
                  >
                    <Rating
                      className="me-1 star-color p-0
                    star-rating"
                      name="disabled"
                      value={value}
                      disabled
                    />
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default CustomQuestions;
