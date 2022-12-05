import { Box, CardContent, Divider, Typography } from "@mui/material";
import React from "react";
// import AddWriter from "./AddWriter";
// import AddArticle from './AddArticle';
import { Link } from 'react-router-dom';
import OrderListTable from "./OrderListTable";
const OrderList = () => {
  return (
    <div>
      <div style={{ width: "100%" }} className=" mt-2">
       <OrderListTable/>
      </div>
    </div>
  );
};

export default React.memo(OrderList);
