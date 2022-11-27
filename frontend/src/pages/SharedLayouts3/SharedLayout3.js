import React from 'react'
import { Navbar } from '../../component'
import { Outlet } from 'react-router-dom'
import Wrapper from './wrapper/SharedLayout3'
import {SmallNavBar} from "../../component"

const SharedLayout2 = () => {
  return (
    <Wrapper>
      <div className="dashboard">
        <div className="dashboardblur"></div>

        <Navbar />
        <SmallNavBar />

        <div className="outlet-container">
          <Outlet />
        </div>
      </div>
    </Wrapper>
  );
}

export default SharedLayout2
