import React from "react";
// import { RiTimer2Line } from "react-icons/ri";
// import { Box } from "@mui/material";

const LiveClock = () => {
  const [time, setTime] = React.useState(new Date());

  React.useMemo(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <div>
      <span
        style={{
          color: "#fff",
          fontSize: "1rem",
          marginRight: "1rem",
          fontWeight: "bold",
        }}
      >
       
        <span>{time?.toLocaleTimeString()}</span>
      </span>
    </div>
  );
};

export default React.memo(LiveClock);
