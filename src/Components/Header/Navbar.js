import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import DrawerComp from "./Drawer";
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  // console.log(isMatch);
  const routes = [
    "/Probondho",
    "/Golpo",
    "/Chora",
    "/Onugolpo",
    "/Kobita",
    "/Nattanudhan",
    "/Vromon",
    "/Ayna",
    "/Sriti",
    "/Oitijjo",
    "/Pothikrit",
    "/Motamot",
  ];
  return (
    <React.Fragment>
      {/* <h3>Header</h3> */}
      <AppBar position="static" sx={{ background: "#063970" }}>
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
                // to={routes[0]}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab
                  label="Probondho"
                  value={routes[0]}
                  component={Link}
                  to={routes[0]}
                />

                <Tab
                  label="Golpo"
                  value={routes[1]}
                  component={Link}
                  to={routes[1]}
                />
                <Tab
                  label="Chora"
                  value={routes[2]}
                  component={Link}
                  to={routes[2]}
                />
                <Tab
                  label="Onugolpo"
                  value={routes[3]}
                  component={Link}
                  to={routes[3]}
                />
                <Tab
                  label="Kobita"
                  value={routes[4]}
                  component={Link}
                  to={routes[4]}
                />
                <Tab
                  label="Nattanudhan"
                  value={routes[5]}
                  component={Link}
                  to={routes[5]}
                />
                <Tab
                  label="Vromon"
                  value={routes[6]}
                  component={Link}
                  to={routes[6]}
                />
                <Tab
                  label="Ayna"
                  value={routes[7]}
                  component={Link}
                  to={routes[7]}
                />
                <Tab
                  label="Sriti"
                  value={routes[8]}
                  component={Link}
                  to={routes[8]}
                />
                <Tab
                  label="Oitijjo"
                  value={routes[9]}
                  component={Link}
                  to={routes[9]}
                />
                <Tab
                  label="Pothikrit"
                  value={routes[10]}
                  component={Link}
                  to={routes[10]}
                />
                <Tab
                  label="Motamot"
                  value={routes[11]}
                  component={Link}
                  to={routes[11]}
                />
              </Tabs>
              {/* <Button sx={{ marginLeft: "auto" }} variant="contained">
                Login
              </Button>
              <Button sx={{ marginLeft: "10px" }} variant="contained">
                SignUp
              </Button> */}
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
