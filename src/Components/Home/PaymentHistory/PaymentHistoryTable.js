import React, { useEffect } from "react";
import AdminHome from "../AdminHome/AdminHome";
import TableDefault from "../Home/Hook/TableDefault";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import ButtonComp from "../../Shared/Button/Button";
// import SearchWriter from './SearchWriter';
// import AddWriter from "./AddApplicant";
// import api from "../../api/Api";
import { useNavigate } from "react-router-dom";
// import Loading from "./../../Shared/SharedLoadingTable/LoadingTable";
import MainLoading from "../../Shared/MainLoading";
import api from "../Home/components/api/Api";
const PaymentHistoryTable = () => {
  const [isLoading, setIsLoading] = useState(false);
  //pagination start
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);
  //   const [n_issue, setN_issue] = useState("");
  const user = JSON.parse(localStorage.getItem("nobovabna_client"));
  const formData = new FormData();

  //   const onTextChange1 = (e) => {
  //     setN_issue(e.target.value);
  //   };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  //pagination end
  const [defaultTd, setDefaultTd] = useState([]);
  //   const [newTd, setNewTd] = useState([]);
  //   const [allowNewTd, setAllowNewTd] = useState(false);
  const columns = [
    { id: 0, label: "Serial", minWidth: 60 },
    { id: 1, label: "Order Id", minWidth: 60 },
    {
      id: 2,
      label: "Item",
      minWidth: 60,
    },
    {
      id: 3,
      label: "Total Bill",
      minWidth: 60,
    },
    {
      id: 4,
      label: "Payment Date",
      minWidth: 60,
    },
    {
      id: 5,
      label: "Quantity",
      minWidth: 60,
    },
    {
      id: 6,
      label: "Paid Amount",
      minWidth: 60,
    },
    {
      id: 7,
      label: "Due Amount",
      minWidth: 60,
    },
    {
      id: 8,
      label: "Pay Method",
      minWidth: 60,
    },

    {
      id: 9,
      label: "Status",
      minWidth: 60,
    },
    {
      id: 10,
      label: "Action",
      minWidth: 60,
    },
  ];

  useEffect(() => {
    setIsLoading(true);
    api
      .get("webapi/client_api/all_payment.php?p_user=" + user?.user_id)
      .then((data) => {
        console.log(data?.data);
        setDefaultTd(data?.data);
        setIsLoading(false);
      });
  }, []);

  //   console.log(newTd);
  console.log(defaultTd);
  return (
    <div>
      <Paper mt={2} pt={3} sx={{ width: "100%", mt: "10px" }}>
        <TableContainer sx={{ maxHeight: 560 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow sx={{ borderColor: "text.primary" }}>
                <TableCell align="center" colSpan={12}>
                  Table List
                </TableCell>
              </TableRow>
              <TableRow>
                {isLoading ? (
                  <MainLoading />
                ) : (
                  <>
                    {" "}
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{
                          top: 57,
                          minWidth: column.minWidth,
                          fontWeight: "bold",
                        }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {defaultTd
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((item, idx) => {
                  return (
                    <TableRow key={idx}>
                      <TableCell
                        style={{ padding: "0px 5px 0px 10px" }}
                        align="left"
                      >
                        {idx}
                      </TableCell>
                      <TableCell
                        style={{ padding: "0px 5px 0px 10px" }}
                        align="left"
                      >
                        {item.order_id}
                      </TableCell>

                      <TableCell
                        style={{ padding: "0px 5px 0px 10px" }}
                        align="left"
                      >
                        {item?.name ? item.name : "nai"}
                      </TableCell>

                      <TableCell
                        style={{ padding: "0px 5px 0px 10px" }}
                        align="left"
                      >
                        {/* {item.time_stamp.split(/\s(.+)/)[0]} */}
                        {item.amount}
                      </TableCell>
                      <TableCell
                        style={{ padding: "0px 5px 0px 10px" }}
                        align="left"
                      >
                        {item.time_stamp.split(/\s(.+)/)[0]}
                      </TableCell>
                      <TableCell
                        style={{ padding: "0px 5px 0px 10px" }}
                        align="left"
                      >
                        {item?.name ? item.name : "nai"}
                      </TableCell>
                      <TableCell
                        style={{ padding: "0px 5px 0px 10px" }}
                        align="left"
                      >
                        {item?.name ? item.name : "nai"}
                      </TableCell>
                      <TableCell
                        style={{ padding: "0px 5px 0px 10px" }}
                        align="left"
                      >
                        {item?.name ? item.name : "nai"}
                      </TableCell>
                      <TableCell
                        style={{ padding: "0px 5px 0px 10px" }}
                        align="left"
                      >
                        {item.pay_method}
                      </TableCell>

                      <TableCell
                        style={{ padding: "0px 5px 0px 10px" }}
                        align="left"
                      >
                        {item.status == 1 ? "Active" : "InActive"}
                      </TableCell>
                      <TableCell
                        style={{ padding: "0px 5px 0px 10px" }}
                        align="left"
                      >
                        <Box
                          sx={{
                            mt: 1,
                            mb: 1,
                          }}
                        >
                          <Box
                            sx={[
                              {
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "start",
                                // mt: 2,
                                flexWrap: "wrap",
                              },
                            ]}
                          >
                            <div
                              className="btn_prb"
                              //   onClick={() =>
                              //     handleEditApplicant(item?.applicant_refer)
                              //   }
                              // onClick={()=>handleEdit(item?.application)}
                            >
                              <ButtonComp
                                // title="edit"
                                title="Details"
                                color="warning"
                                // className="mb-2"
                                // edit
                              />
                            </div>

                            {/* <div className="btn_prb">
                              <ButtonComp
                                // title="Publish"
                                color="primary"
                                // className="mb-2"
                                publish
                              />
                            </div>
                            <div className="btn_prb">
                              <ButtonComp
                                // title="Delete"
                                color="info"
                                deleteIco
                              ></ButtonComp>
                            </div> */}
                          </Box>
                        </Box>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[4, 8, 12]}
          component="div"
          count={defaultTd.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export default React.memo(PaymentHistoryTable);
