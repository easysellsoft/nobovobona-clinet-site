import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import Register from "./../Authentication/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute.js";
import { Box } from "@mui/material";
import Footer from "../Footer/Footer";
import ProjectRateAdd from "../Home/ProjectRate/ProjectRateAdd/ProjectRateAdd";
import WhatsappReport from "../Home/WhatsappReport/WhatsappReport";
// import OtpReport from "./../Home/OtpReport/OtpReport";
import OtpReportPage from "./../Home/OtpReportPage/OtpReport";
import SmsReportPage from "./../Home/SmsReportPage/SmsReport";
import Issue from "../Home/Issue/Issue";
import Section from "./../Home/Section/Section";
import Writer from "./../Home/Writer/Writer";
import Menu from "./../Home/Menu/Menu";
import Article from "./../Home/Article/Article";
import AddPage from "../Home/AddPage/AddPage";
import Orders from "./../Home/Orders/Orders";
import Rate from "./../Home/Rate/Rate";
import Payment from "./../Home/Payment/Payment";
import Users from "./../Home/Users/Users";
import Others from "./../Home/Others/Others";
import Messages from "./../Home/Messages/Messages";
// import Home from "../../ClientComponents/Home/Home";

const Login = React.lazy(() => import("./../Authentication/Login/Login"));
const Error = React.lazy(() => import("../Error/Error"));
const Home = React.lazy(() => import("./../Home/Home/Home.js"));
// const AdminHome = React.lazy(() => import("./../Home/AdminHome/AdminHome.js"));

// const AdminDashboard = React.lazy(() =>
//   import("./../Home/AdminDashboard/AdminDashboard.js")
// );
// const Investment = React.lazy(() =>
//   import("./../Home/Investment/Investment.js")
// );
// const Suppliers = React.lazy(() =>
//   import("./../Home/Home/Suppliers/Suppliers.js")
// );
// const NewPayment = React.lazy(() =>
//   import("./../Home/Home/NewPayment/NewPayment.js")
// );
// const ReceivedPayment = React.lazy(() =>
//   import("./../Home/Home/ReceivedPayment/ReceivedPayment.js")
// );
// const PaymentMethod = React.lazy(() =>
//   import("./../Home/Home/PaymentMethod/PaymentMethod.js")
// );
// const ProjectRate = React.lazy(() =>
//   import("./../Home/ProjectRate/ProjectRate.js")
// );

const Routing = () => {
  //scroll to top window size
  useEffect(() => {
    const topButton = document.getElementById("topButton");
    window.onscroll = function () {
      if (window.pageYOffset > 100) {
        topButton.style.display = "block";
        topButton.style.position = "fixed";
        topButton.style.right = 0;
        topButton.style.bottom = 0;
        topButton.style.zIndex = "1000";
      } else {
        topButton.style.display = "none";
      }
    };
    topButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        left: 100,
        behavior: "smooth",
      });
    });
  }, []);
  return (
    <>
      <Box
        sx={[
          {
            width: "100%",
            // height: window.innerHeight >= 500 && "calc(100vh - 54px)",
            // : "calc(100vh - 50px)",
          },
        ]}
      >
        <Routes>
          <Route path="*" element={<Error />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
              // <Home></Home>
            }
          >
            
          </Route>
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/register" element={<Register />} /> */}
        </Routes>
        {/* scrolling back to top  */}
        <div>
          <button
            id="topButton"
            // className="btn m-2 fs-2 bg-white"
            style={{
              display: "none",
              color: "#1BB096",
              zIndex: "999",
              margin: "2rem",
              backgroundColor: "#fff",
              fontSize: "1.5rem",
              border: "none",
              borderRadius: "50%",
              padding: "0.5rem",
              cursor: "pointer",
            }}
          >
            <BsFillArrowUpCircleFill />
          </button>
        </div>
      </Box>
      {/* footer  */}
      {/* <Box
        sx={[
          {
            // position: "relative",
            // bottom: 0,
            // width: "100%",
            // // height: "100vh",
            // height: "Auto",
            // zIndex: "999",
          },
        ]}
      >
        <Footer />
      </Box> */}
    </>
  );
};

export default Routing;
