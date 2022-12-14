import * as React from "react";
import { makeStyles, styled, useTheme } from "@mui/material/styles";
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
import useAuth from "./../../../Hooks/useAuth";
import MainRoutes from "./MainRoutes/MainRoutes";
import DrawerLogo from './asset/drawer_logo.png';
import img from './asset/drawer_logo.png';
import './Home.css';
import ArticleDemo from "./components/pdfViewer/articleDemo/ArticleDemo";
import MyLibrary from "./components/myLibrary/MyLibrary";

//end
// const drawerWidth = 240;
const drawerWidth = 285;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  width: "100",
  // backgroundColor:"#777",
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
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function Home() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [battery, setBattery] = React.useState(0);
  //show battery level
  navigator.getBattery().then(function (battery) {
    // console.log(battery);
    setBattery(parseInt(battery.level * 100));
  });

  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    // setOpen(true);
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    // setNestedNavOpen(false);
  };

  //get user information from localStorage
  const user = JSON.parse(localStorage.getItem("nobovabna_client"));
  console.log(user)

  // get data or object from context auth provider
  const { pageRefresh, setPageRefresh } = useAuth();

  // update window innerWith every time the window is resized
  React.useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth > 600 ? setOpen(true) : setOpen(false);
    });
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* Appbar remove kora hoyece aikhan theke .............. */}
      {/* end  */}
      {/* <Drawer variant="permanent" open={open}> */}
      <Drawer
        variant="permanent"
        sx={{
          "& .MuiDrawer-root": {
            position: "static",
            backgroundColor: "#fff",
          },
          "& .MuiPaper-root": {
            // position: "static",
            // backgroundColor: "#063970",
            // borderRadius: "0px 30px 65px 0px",
            position: "fixed",
            backgroundColor: "#063970",
            borderRadius: "0px 30px 65px 0px",
            top: "70px",
          },
        }}
        open={open}
      >
        <DrawerHeader position="static" style={{}}>
          {open ? (
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {/* <h3>Admin</h3> */}
              <Typography
                sx={{ color: "#fff" }}
                ml={8}
                variant="h6"
                component="h6"
              >
                ভার্চুয়াল লাইব্রেরি
              </Typography>

              <IconButton
                onClick={handleDrawerClose}
                style={{
                  color: "#fff",
                  // position: "fixed",
                }}
              >
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
            </Box>
          ) : (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                ...(open && { display: "none" }),
                // color: "text.primary",
                color: "#fff",
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
          {/* <IconButton
            onClick={handleDrawerClose}
            style={{
              color: "#000",
              position: "fixed",
            }}
          >
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton> */}

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
        </DrawerHeader>
        <Divider />
        {/* main routes  */}
        <MainRoutes />
        {/* end main routes  */}

        <Divider />
        <List>
          {["লগআউট"].map((text, index) => (
            <ListItem
              button
              key={text}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {index === 0 && (
                  <Tooltip title="লগআউট" arrow placement="right-start">
                    <span
                      style={{
                        fontSize: "1.8rem",
                      }}
                    >
                      <BiLogOutCircle
                        color="#fff"
                        onClick={() => {
                          localStorage.removeItem("user");
                          localStorage.removeItem("ip");
                          localStorage.removeItem("uniqId");
                          localStorage.removeItem("temp");
                          setPageRefresh(!pageRefresh);
                          // window.location.reload();
                          navigate("/login");
                        }}
                      />
                    </span>
                  </Tooltip>
                )}
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={{ opacity: open ? 1 : 0, color: "#fff", marginTop: "-6px" }}
              />
            </ListItem>
          ))}
        </List>
        <Divider />
        <Box
          sx={{
            ...(!open && { display: "none" }),
            // color: "text.primary",
            // color: "#fff",
          }}
          className="imgDrawerFooter"
        >
          <img
            src={img}
            alt="OTP"
            style={{
              width: "250px",
              height: "auto",
            }}
          />
        </Box>
      </Drawer>
      <Box
        // bgColor="text.disabled"
        component="main"
        sx={{
          bgcolor: "#FBFAFA",
          // bgcolor: "yell",
          flexGrow: 1,
          px: 2,
          pb: 0,
          pt: 2,

          width: "100%",
          overflow: "auto",
          minHeight: "90vh",
          marginTop: "90px",
        }}
      >
        {/* <DrawerHeader /> */}
        {/* <ArticleDemo/> */}

        <Outlet></Outlet>
      </Box>
    </Box>
  );
}

export default React.memo(Home);
