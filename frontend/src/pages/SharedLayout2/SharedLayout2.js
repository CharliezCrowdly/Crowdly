import React from "react";
import { UserInfoCard, Navbar, SmallNavBar } from "../../component";
import { Outlet } from "react-router-dom";
import Wrapper from "./wrapper/SharedLayout2";
import { Recommendation, Alert,Recommendationlst } from "../../component";
import lstrecommendation from "../../utils/lstrecommendation";

import Todo from "../JobDetail/component/Todo";

const SharedLayout2 = () => {
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

            <div className="right-content">
              <Recommendationlst/>

              <Todo />
            </div>
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default SharedLayout2;
