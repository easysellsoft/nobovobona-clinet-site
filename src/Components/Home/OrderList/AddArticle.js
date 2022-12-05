import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CheckIcon from "@mui/icons-material/Check";
import ToggleButton from "@mui/material/ToggleButton";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor:  theme.palette.common.black,
    backgroundColor: "#778179f2",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein, ex1, ex2) {
  return { name, calories, fat, carbs, protein, ex1, ex2 };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0, "A", "B"),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3, "A", "B"),
  createData("Eclair", 262, 16.0, 24, 6.0, "A", "B"),
  createData("Cupcake", 305, 3.7, 67, 4.3, "A", "B"),
  createData("Gingerbread", 356, 16.0, 49, 3.9, "A", "B"),
];
function AddArticle() {
  const [section, setSection] = useState("");
  const [selected, setSelected] = React.useState(false);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">
                <ToggleButton
                  value="check"
                  selected={selected}
                  onChange={() => {
                    setSelected(!selected);
                  }}
                >
                  <CheckIcon sx={{ color: "#241f1f" }} />
                </ToggleButton>
              </StyledTableCell>
              <StyledTableCell> Serial</StyledTableCell>
              <StyledTableCell align="right">January - 2022</StyledTableCell>
              <StyledTableCell align="right">Article-1 (Date)</StyledTableCell>
              <StyledTableCell align="right">Article-2 (Date)</StyledTableCell>
              <StyledTableCell align="right">Memo</StyledTableCell>

              <StyledTableCell align="right">Balance</StyledTableCell>
              <StyledTableCell align="right">Previous Balance</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  <ToggleButton
                    value="check"
                    selected={selected}
                    onChange={() => {
                      setSelected(!selected);
                    }}
                  >
                    <CheckIcon />
                  </ToggleButton>
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                <StyledTableCell align="right">{row.protein}</StyledTableCell>
                <StyledTableCell align="right">{row.ex1}</StyledTableCell>
                <StyledTableCell align="right">{row.ex2}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default AddArticle;
