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

import Menu from "./../Home/Menu/Menu";
// import Article from "../Home/OrderList/OrderList";
// import Orders from "../Home/Shipping/HistoryShipping";
import Rate from "./../Home/Rate/Rate";
import Payment from "./../Home/Payment/Payment";
import Users from "./../Home/Users/Users";
import Others from "./../Home/Others/Others";
import Messages from "./../Home/Messages/Messages";
import MainHome from "./../Home/MainHome/MainHome";
import Method from "./../Home/Method/Method";
// import ArticleDetails from "../Home/OrderList/ArticleDetails";
// import Home from "../../ClientComponents/Home/Home";

import Header from "./../Header/Header";
// import OrderDetails from "../Home/pageComponents/OrderDetails";
// import HistoryShipping from "../Home/Shipping/HistoryShipping";
// import AddAddress from "./../Home/Shipping/AddAddress";
import Message from "../Home/Message/Message";

import Probondho from "./../Home/pageComponents/Probondho/Probondho";
import MyLibrary from "../Home/Home/components/myLibrary/MyLibrary";
import ArticleDemo from "../Home/Home/components/pdfViewer/articleDemo/ArticleDemo";
import Ovijug from "../Home/Ovijug/Ovijug";
// import OrderList from "../Home/OrderList/OrderList";

const Login = React.lazy(() => import("./../Authentication/Login/Login"));
const Error = React.lazy(() => import("../Error/Error"));
const Home = React.lazy(() => import("./../Home/Home/Home.js"));
const AdminHome = React.lazy(() => import("./../Home/AdminHome/AdminHome.js"));

const AdminDashboard = React.lazy(() =>
  import("./../Home/AdminDashboard/AdminDashboard.js")
);
const OrderList = React.lazy(() => import("../Home/OrderList/OrderList"));
const PaymentHistory = React.lazy(() =>
  import("../Home/PaymentHistory/PaymentHistory")
);
const Shipment = React.lazy(() => import("../Home/Shipment/Shipment"));
const Profile = React.lazy(() => import("../Home/Profile/Profile"));
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
        <Header />
        <Routes>
          <Route path="*" element={<Error />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          >
            <Route path="/" element={<MyLibrary />} />
            <Route path="/library/:referId" element={<ArticleDemo />} />
            <Route path="/orderList" element={<OrderList />} />
            {/* <Route path="/payment/history" element={<Writer />} /> */}
            <Route path="/payment/history" element={<PaymentHistory />} />
            <Route path="/shipment" element={<Shipment />} />
            <Route path="/dashboard/dashboard" element={<Issue />} />
            <Route path="/dashboard/order" element={<Section />} />

            <Route path="/dashboard/payment/method" element={<Method />} />
            {/* <Route path="/dashboard/menu" element={<Menu />} /> */}
            {/* <Route path="/dashboard/reading" element={<Article />} /> */}
            {/* <Route
              path="/dashboard/reading/dashboard/reading/history/details"
              element={<ArticleDetails />}
            /> */}
            <Route path="/profile" element={<Profile />} />
            {/* <Route
              path="/dashboard/shipping/history"
              element={<HistoryShipping />}
            />
            <Route
              path="/dashboard/shipping/address"
              element={<AddAddress />}
            /> */}
            {/* <Route path="/dashboard/rate" element={<Rate />} />
            <Route path="/dashboard/payment" element={<Payment />} /> */}
            {/* <Route path="/dashboard/messages" element={<Messages />} /> */}
            {/* <Route path="/dashboard/messages" element={<Message />} /> */}
            <Route path="/ovijug" element={<Ovijug />} />
            {/* <Route path="/dashboard/users" element={<Users />} />
            <Route path="/dashboard/others" element={<Others />} /> */}
          </Route>

          <Route path="/Probondho" element={<Probondho />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Routes></Routes>
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
            position: "relative",
            bottom: 0,
            width: "100%",
            // height: "100vh",
            height: "50px",
            zIndex: "999",

            backgroundColor: "#202020",
          },
        ]}
      >
        <Footer />
      </Box> */}
    </>
  );
};

export default Routing;
