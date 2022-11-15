import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { IoIosNotifications } from "react-icons/io";
import Wrapper from "../wrappers/Navbar";
import { useAppContext } from "../context/appContext";

const Navbar = () => {
  const {user} = useAppContext()
  return (
    <Wrapper>
      <nav className="navbar sticky">
        <Logo />

        <NavLinks />

        <div className="nav-content ">
          <IoIosNotifications className="bell-icon" />
          <img
            className="profile-pic-sm"
            src="https://us.123rf.com/450wm/molokowall/molokowall2201/molokowall220100015/180568257-young-smiling-man-adam-avatar-3d-vector-people-character-illustration-cartoon-minimal-style-.jpg?ver=6"
            alt=""
          />
          <h5>{user.username}</h5>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
