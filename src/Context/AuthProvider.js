import React from "react";
// import axios from "axios";
import socketIO from "socket.io-client";
export const AuthContext = React.createContext(null);

const ENDPOINT = "https://yeapbe.com:3400/";
let socket;

const AuthProvider = ({ children }) => {
  const [pageRefresh, setPageRefresh] = React.useState(false);

  const user = JSON.parse(localStorage.getItem("nobovabna_client"));

  socket = socketIO(ENDPOINT, {
    transports: ["websocket"],
  });

  return (
    <AuthContext.Provider
      value={{
        pageRefresh,
        setPageRefresh,
        socket,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default React.memo(AuthProvider);
