import React from "react";
import { useAppContext } from "../context/appContext";
import { Navigate } from "react-router-dom";
const IsLoggedin = ({ children }) => {
  const { user } = useAppContext();
  if (user) {
    
    return <Navigate to="/user/feeds" />;
  }
  return children;
};

export default IsLoggedin;
