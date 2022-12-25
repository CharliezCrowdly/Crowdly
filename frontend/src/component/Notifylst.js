import React from "react";
import SingleNotification from "./SingleNotification";
const Notifylst = () => {
  return (
    <div className="notifylst ">
      {[...Array(9)].map((item) => {
        return <SingleNotification />;
      })}
    </div>
  );
};

export default Notifylst;
