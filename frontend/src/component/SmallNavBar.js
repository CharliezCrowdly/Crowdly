import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useAppContext } from "../context/appContext";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import Wrapper from "../wrappers/SmallNavBar";
const SmallNavBar = () => {
  const { showSidebar, toggleSidebar } = useAppContext();

  //  const [showSidebar,setSidbar] = useState(false)

  //  const toggleSidebar = ()=>{
  //     setSidbar(!showSidebar)
  //  }

  return (
    <Wrapper>
      <div className="smallsidebar ">
        <Logo />

        <GiHamburgerMenu className="icon" onClick={toggleSidebar} />
      </div>
      <div
        className={
          showSidebar
            ? "sidebar-container show-sidebar glassmorphism"
            : "d-none"
        }
      >
        <button className="close-btn" onClick={toggleSidebar}>
          <FaTimes />
        </button>
        <div className="content">
          <NavLinks toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallNavBar;
