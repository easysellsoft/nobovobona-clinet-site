import React from 'react';
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
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

import { BiLogOutCircle } from "react-icons/bi";

import { Outlet } from "react-router-dom";
import axios from "axios";
import { Avatar, Chip, ListItem, Tooltip } from "@mui/material";
//start
// import Badge from "@mui/material/Badge";

import LiveClock from "./LiveClock/LiveClock";
// import useAuth from "./../../../Hooks/useAuth";

import SearchField from "./SearchFiled/SearchFiled";
// import useAuth from "./../../../Hooks/useAuth";
// import MainRoutes from "./MainRoutes/MainRoutes";
// import Login from "../../Authentication/Login/Login";
// import Footer from "./../../Footer/Footer";
// import Header from "./../../Header/Navbar";
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
import useAuth from '../../Hooks/useAuth';
import logo from "../../assets/logo/nobovabna_logo_white.png"
// import Product from "./pageComponents/Product";

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

const Header = () => {
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
  const user = JSON.parse(localStorage.getItem("nobovabna_client"));
  console.log(user)

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
          position="fixed"
          sx={{
            backgroundColor: "#092b51",
            borderBottom: "5px solid #2999bf",
          }}
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
              <Box sx={{ display: "flex", justifyContent:"center", alignItems:"center"}}>
                <img
                  style={{ height: "50px", width: "auto",padding:"7px" }}
                  src={logo}
                  alt="missing"
                />
              </Box>
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            {/* <Box sx={{ marginLeft: "auto" }}>
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
            </Box> */}
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ flexGrow: 1 }} />
            {/* <Box
        
            >
              <SearchField></SearchField>
            </Box> */}
            {/* show battery lavel  */}
            {/* <Box
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
            </Box> */}
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
                  color: "#fff",
                  fontSize: "1rem",
                  marginRight: "1rem",
                  fontWeight: "bold",
                }}
              >
                <span>{date}</span>
              </span>
            </Box>
            {user ? (
              <Button
                onClick={() => {
                  localStorage.removeItem("nobovabna_client");
                  localStorage.removeItem("ip");
                  localStorage.removeItem("uniqId");
                  localStorage.removeItem("temp");
                  setPageRefresh(!pageRefresh);
                  // window.location.reload();
                  navigate("/login");
                }}
                sx={{ marginLeft: "auto" }}
                variant="contained"
              >
                <LogoutIcon sx={{ marginRight: "10px" }} />
                Log Out
              </Button>
            ) : (
              <Button
                onClick={() => {
                  navigate("/login");
                }}
                sx={{ marginLeft: "auto" }}
                variant="contained"
              >
                <LoginIcon sx={{ marginRight: "10px" }} />
                Login
              </Button>
            )}
            {/* <Button
                onClick={() => {
                  navigate("/login");
                }}
                sx={{ marginLeft: "auto" }}
                variant="contained"
              >
                <LoginIcon sx={{ marginRight: "10px" }} />
                Login
              </Button> */}

            <Box sx={{ display: { xs: "flex", md: "none" } }}></Box>
          </Toolbar>
        </AppBar>
      </Box>
      {/* <Navbar></Navbar> */}
    </Box>
  );
};

export default Header;