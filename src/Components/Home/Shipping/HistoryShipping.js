import React, { useState } from "react";
// import MethodTable from "./MethodTable";
// import AddMethod from "./MethodTable";
import { Box, Button } from "@mui/material";
import ButtonComp from "../../Shared/Button/Button";
import HistoryShippingTable from "./HistoryShippingTable";
// import AddPaymentMethod from "./AddPaymentMethod";
import AddAddress from './AddAddress';

const HistoryShipping = () => {
  const [showPayment, setShowPayment] = useState(" ");
  const [showTable, setShowTable] = useState("click");
  console.log(showTable);
  return (
    <div>
      <div style={{ width: "100%" }} className="mb-5">
        <Box
          sx={{
            mt: 0,
            mb: 3,
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
              onClick={() => {
                setShowTable("click");

                setShowPayment("xx");
              }}
            >
              <ButtonComp title="History" color="warning" refreshIco />
              {/* <Box m={2} pt={3}>
                <Button variant="contained">Method</Button>
              </Box> */}
            </div>
            <div
              className="btn_prb"
              onClick={() => {
                setShowPayment("showPayment");
                setShowTable("dd");
              }}
            >
              <ButtonComp title="Export" color="info" refreshIco />
              {/* <Box m={2} pt={3}>
                <Button variant="contained" margin={5}>
                  New
                </Button>
              </Box> */}
            </div>
          </Box>
        </Box>
        {showTable === "click" && <HistoryShippingTable />}
        {showPayment === "showPayment" && <h3>Export</h3>}
      </div>
    </div>
  );
};

export default HistoryShipping;
