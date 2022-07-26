import React, { useState } from 'react'
import { Box, Button } from "@mui/material";
import ButtonComp from "../../Shared/Button/Button";

// import AddPaymentMethod from "./AddPaymentMethod";
import NewListTable from './NewListTable';
import NewAddress from './NewAddress';

function AddAddress() {
   const [showPayment, setShowPayment] = useState(" ");
   const [showTable, setShowTable] = useState("click");
  return (
    <div>
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
            <ButtonComp title="List" color="warning" refreshIco />
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
            <ButtonComp title="New" color="info" refreshIco />
            {/* <Box m={2} pt={3}>
                <Button variant="contained" margin={5}>
                  New
                </Button>
              </Box> */}
          </div>
        </Box>
      </Box>
      {showTable === "click" && <NewListTable />}
      {showPayment === "showPayment" && <NewAddress />}
    </div>
  );
}

export default AddAddress