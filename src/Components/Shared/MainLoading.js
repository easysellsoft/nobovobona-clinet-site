import { Box } from "@mui/material";
import React from "react";
// import loading from "../../Components/Vendors/Images/loading.gif";
// import loading from "../../Components/Vendors/Images/loadinParcentage1.png";
// import loading from "../../Components/Vendors/Images/loadperc.gif";
import loading from "../Vendors/Images/loading.gif";
const MainLoading = () => {
  return (
    // <div className='text-center h-screen '>
    //     <button className="btn loading">loading</button>
    // </div>
    <Box
      sx={{
        height: "auto",
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
        // flexDirection: "column",
      }}
    >
      <img
        src={loading}
        alt="loading"
        style={{
          width: "130px",
          height: "auto",
        }}
      />
    </Box>
  );
};

export default MainLoading;
