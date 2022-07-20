import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { useNavigate } from "react-router-dom";
import { GiBatteryPackAlt } from "react-icons/gi";

import { BiLogOutCircle } from "react-icons/bi";

import { Outlet } from "react-router-dom";
import axios from "axios";
import { Avatar, Chip, ListItem, Tooltip } from "@mui/material";
//start
// import Badge from "@mui/material/Badge";

import LiveClock from "../LiveClock/LiveClock";
import SearchField from "../SearchFiled/SearchFiled";
import useAuth from "./../../../Hooks/useAuth";
import MainRoutes from "./MainRoutes/MainRoutes";
import Login from "../../Authentication/Login/Login";
import Footer from './../../Footer/Footer';
import Header from './../../Header/Navbar';
import Navbar from "./Navbar";

//end
//ffff
// import React, { useState } from "react";
import {
  // AppBar,
  // Button,
  Tab,
  Tabs,
  // Toolbar,
  // Typography,
  useMediaQuery,
  // useTheme,
} from "@mui/material";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import DrawerComp from "./Drawer";
const drawerWidth = 240;


// const drawerWidth = 300;

// const openedMixin = (theme) => ({
//   width: drawerWidth,
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: "hidden",
// });

// const closedMixin = (theme) => ({
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: "hidden",
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up("sm")]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

const DrawerHeader = styled("div")(({ theme }) => ({
  width: "100",
  display: "flex",

  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  // boxSizing: "border-box",
  // ...(open && {
  //   ...openedMixin(theme),
  //   "& .MuiDrawer-paper": openedMixin(theme),
  // }),
  // ...(!open && {
  //   ...closedMixin(theme),
  //   "& .MuiDrawer-paper": closedMixin(theme),
  // }),
}));

function Home() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [battery, setBattery] = React.useState(0);
  const current = new Date();
    const date = `${current.getDate()}/${
      current.getMonth() + 1
    }/${current.getFullYear()}`;
  //show battery level
  navigator.getBattery().then(function (battery) {
    // console.log(battery);
    setBattery(parseInt(battery.level * 100));
  });

  const navigate = useNavigate();

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  
  // };

  //get user information from localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  // get data or object from context auth provider
  const { pageRefresh, setPageRefresh } = useAuth();

  // update window innerWith every time the window is resized
  // React.useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     window.innerWidth > 600 ? setOpen(true) : setOpen(false);
  //   });
  // }, []);
   const [value, setValue] = React.useState();
  //  const theme = useTheme();
  //  console.log(theme);
   const isMatch = useMediaQuery(theme.breakpoints.down("md"));
   console.log(isMatch);

  return (
    <Box>
      <CssBaseline />
      <Box>
        <AppBar
          // position="static"
          component="header"
          sx={{ backgroundColor: "#fff" }}
          // position="fixed"
          // open={open}
          // sx={{
          //   backgroundColor: "white",
          //   borderBottom: "1px solid #e8e8e8",
          //   boxShadow: "none",
          // }}
        >
          <Toolbar>
            {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
              color: "text.primary",
            }}
          >
            <MenuIcon />
          </IconButton> */}
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                // display: { xs: "none", sm: "block" },
                color: "#1BB096",
                fontWeight: "bold",
                fontSize: "1.5rem",

                textTransform: "uppercase",
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/");
              }}
            >
              Logo
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ marginLeft: "auto" }}>
              <Typography
                variant="subtitle2"
                noWrap
                component="div"
                sx={{
                  display: { xs: "none", sm: "block" },
                  color: "#777",
                  width: "250px",
                  fontWeight: "bold",
                  // fontSize: "1.5rem",

                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
              >
                Trending Now:
                .............,.................................................................................................................................................
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ flexGrow: 1 }} />
            <Box
            // sx={{
            //   display: {
            //     // xs: "none",
            //     // sm: "none",
            //     md: "flex",
            //   },
            //   flexDirection: "column",
            //   alignItems: "center",
            // }}
            >
              <SearchField></SearchField>
            </Box>
            {/* show battery lavel  */}
            <Box
              sx={[
                {
                  color: "#000",
                  fontWeight: "bold",
                  mx: 2,
                  "@media screen and (max-width: 768px)": {
                    display: "none",
                  },
                },
              ]}
            >
              <GiBatteryPackAlt
                style={{
                  fontSize: "1.2rem",
                  marginTop: "0.2rem",
                }}
              />
              {battery}%
            </Box>
            {/* show live clock  */}
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "flex",
                },
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <LiveClock />
              <span
                style={{
                  color: "#000",
                  fontSize: "1rem",
                  marginRight: "1rem",
                  fontWeight: "bold",
                }}
              >
                <span>{date}</span>
              </span>
            </Box>
            {/* profile click information  */}
            {/* <Box>
            <Tooltip title={user?.c_info} arrow placement="right-start">
              <Button id="demo-positioned-button">
                <Chip
                  avatar={<Avatar alt="Natacha" src={user?.userpic} />}
                  label={user?.uname}
                  variant="outlined"
                />
              </Button>
            </Tooltip>
          </Box> */}
            <Box sx={{ display: { xs: "flex", md: "none" } }}></Box>
          </Toolbar>
        </AppBar>
      </Box>

      {/* end  */}
      <Box>{/* <Header></Header> */}</Box>
      <AppBar
        // position="static"
        component="footer"
        sx={{ background: "#063970" }}
      >
        <Toolbar>
          <AddBusinessRoundedIcon sx={{ transform: "scale(2)" }} />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                Shoppee
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Products" />
                <Tab label="Services" />
                <Tab label="About Us" />
                <Tab label="Contact" />
              </Tabs>
              <Button sx={{ marginLeft: "auto" }} variant="contained">
                Login
              </Button>
              <Button sx={{ marginLeft: "10px" }} variant="contained">
                SignUp
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          // px: 2,
          pb: 0,
          width: "100%",
          overflow: "auto",
          minHeight: "90vh",
          color: "black",
        }}
      >
        {/* <Header></Header> */}
        <DrawerHeader />
        <Outlet />
        {/* <Header></Header> */}
        <Navbar />

        <Login></Login>
        <Footer></Footer>
      </Box>
    </Box>
  );
}

export default React.memo(Home);
