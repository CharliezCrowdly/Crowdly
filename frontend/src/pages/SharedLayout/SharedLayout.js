import React from "react";
import { UserInfoCard, Navbar, SmallNavBar } from "../../component";
import { Outlet } from "react-router-dom";
import Wrapper from "./wrapper/SharedLayout";

const SharedLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <div className="dashboardblur"></div>
        <div className="dashboard-content">
          <Navbar />
          <SmallNavBar />
          <div className="dashboard-page">
            <div className="left-content">
              <UserInfoCard />
            </div>
            <div className="middle-content">
              <Outlet />
            </div>
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default SharedLayout;
