import React, { useEffect } from "react";
import AdminHome from "../AdminHome/AdminHome";
import IssueTable from "./IssueTable";
import TableDefault from "./../Home/Hook/TableDefault";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import ButtonComp from "./../../Shared/Button/Button";
import SearchIssue from "./SearchIssue";
import AddIssue from "./AddIssue/AddIssue";
import { TableFooter } from "@material-ui/core";
import MTable from './components/MTable';
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaFirstOrderAlt } from "react-icons/fa";
import { BsCartDash } from "react-icons/bs";
import { MdOutlinePayments } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { MdOutlineSubscriptions } from "react-icons/md";
import { BiPurchaseTag } from "react-icons/bi";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";



const styleForTotal = {
  fontSize: "44px",
  color: "#063970",
};
const styleForActive = {
  fontSize: "44px",
  color: "green",
};
const styleForInactive = {
  fontSize: "44px",
  color: "#7c7c04",
};
const styleForPending = {
  fontSize: "44px",
  color: "#e1520f",
};
const Issue = () => {
  const [show, setShow] = useState(false);
  const [refresh, setRefresh] = useState(false);
  //pagination start
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  //pagination end
  const [defaultTd, setDefaultTd] = useState([]);
 
  const columns = [
    {
      id: 0,
      label: "Method",
      minWidth: 60,
    },

    { id: 1, label: "Amount ", minWidth: 60 },
    { id: 2, label: "Date", minWidth: 60 }, //name
   
  ];

  useEffect(() => {
    fetch("http://nobovabna.com/webapi/tbl_issue.php")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDefaultTd(data);
      });
  }, []);
  return (
    <div>
      {/* <AdminHome/> */}
      <Grid container sx={{ px: "30px" }} spacing={{ xs: 2, md: 3, lg: 4 }}>
        <Grid item xs={6} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea sx={{ display: "flex" }}>
              {/* <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              /> */}
              <AiOutlineShoppingCart
                style={styleForTotal}
              ></AiOutlineShoppingCart>

              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{ fontWeight: "bold" }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  1000
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Total Order
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea sx={{ display: "flex" }}>
              <FaFirstOrderAlt style={styleForActive}></FaFirstOrderAlt>

              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{ fontWeight: "bold" }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  45000
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Active Order
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea sx={{ display: "flex" }}>
              <BsCartDash style={styleForInactive}></BsCartDash>

              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{ fontWeight: "bold" }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  7000
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Inactive Order
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea sx={{ display: "flex" }}>
              <MdOutlinePayments style={styleForTotal}></MdOutlinePayments>

              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{ fontWeight: "bold" }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  6000
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Total Payment
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea sx={{ display: "flex" }}>
              <RiSecurePaymentFill
                style={styleForPending}
              ></RiSecurePaymentFill>

              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{ fontWeight: "bold" }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  1000
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Pending Payment
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea sx={{ display: "flex" }}>
          
              <MdOutlineSubscriptions style={styleForTotal}></MdOutlineSubscriptions>

              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{ fontWeight: "bold" }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  22000
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Total Subscription
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea sx={{ display: "flex" }}>
            
              <BiPurchaseTag style={styleForTotal}></BiPurchaseTag>

              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{ fontWeight: "bold" }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  12000
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Total Purchase
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea sx={{ display: "flex" }}>
              {/* <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              /> */}
              <FaShippingFast style={styleForPending}></FaShippingFast>

              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography gutterBottom variant="h5" component="div">
                  13000
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Shipment Pending
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea sx={{ display: "flex" }}>
              {/* <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              /> */}
              <MdOutlineMessage style={styleForTotal}></MdOutlineMessage>

              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{ fontWeight: "bold" }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  1344
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Total Message
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>

      {/* 
      <Box sx={{ display: "flex", width: "100%" }}>
      
      
      </Box> */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper mt={2} pt={3} sx={{ width: "100%" }}>
            <TableContainer sx={{ maxHeight: 540, my: "40px" }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow sx={{ borderColor: "text.primary" }}>
                    <TableCell align="center" colSpan={12}>
                      Table
                    </TableCell>
                  </TableRow>
                  <TableRow>
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
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align="left">A</TableCell>
                    <TableCell align="left">V</TableCell>
                    <TableCell align="left">C</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">A</TableCell>
                    <TableCell align="left">V</TableCell>
                    <TableCell align="left">C</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper mt={2} pt={3} sx={{ width: "100%" }}>
            <TableContainer sx={{ maxHeight: 540, my: "40px" }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow sx={{ borderColor: "text.primary" }}>
                    <TableCell align="center" colSpan={12}>
                      Table
                    </TableCell>
                  </TableRow>
                  <TableRow>
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
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align="left">A</TableCell>
                    <TableCell align="left">V</TableCell>
                    <TableCell align="left">C</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">A</TableCell>
                    <TableCell align="left">V</TableCell>
                    <TableCell align="left">C</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>

      {/* {!show && (
        <div>
          <Paper mt={2} pt={3} sx={{ width: "100%", mt: "40px" }}>
            <TableContainer sx={{ maxHeight: 540 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow sx={{ borderColor: "text.primary" }}>
                    <TableCell align="center" colSpan={12}>
                      Issue Table
                    </TableCell>
                  </TableRow>
                  <TableRow>
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
                  </TableRow>
                </TableHead>
                <TableBody>
                  {defaultTd
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((item) => {
                      return (
                        <TableRow key={item.id}>
                          <TableCell align="left">{item.id}</TableCell>
                          <TableCell align="left">{item.cover_story}</TableCell>
                         
                          <TableCell align="left">{item.name}</TableCell>
                          <TableCell align="left">
                            <img
                              style={{ height: "70px", width: "70px" }}
                              src={item.image_url}
                              alt="img"
                            />
                          </TableCell>
                          <TableCell align="left">
                            {item.publish_date}
                          </TableCell>
                          <TableCell align="left">{item.poster}</TableCell>
                          <TableCell align="left">{item.time_stamp}</TableCell>
                          <TableCell align="left">{item.issue_refer}</TableCell>
                          <TableCell align="left">
                            {item.status == 1 ? "Active" : "InActive"}
                          </TableCell>
                          <TableCell align="left">
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
                                    mt: 2,
                                    flexWrap: "wrap",
                                  },
                                ]}
                              >
                                <div className="btn_prb">
                                  <ButtonComp
                                  
                                    color="warning"
                                    className="mb-2"
                                    edit
                            
                                  />
                                </div>

                                <div className="btn_prb">
                                  <ButtonComp
                                 
                                    color="primary"
                                    className="mb-2"
                                    publish
                                  />
                                </div>
                                <div className="btn_prb">
                                  <ButtonComp
                              
                                    color="info"
                                    deleteIco
                                  ></ButtonComp>
                                </div>
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
      )} */}
    </div>
  );
};

export default Issue;
