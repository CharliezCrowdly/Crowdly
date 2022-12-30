import React, { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { IoIosNotifications } from "react-icons/io";
import Wrapper from "../wrappers/Navbar";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
import Notifylst from "./Notifylst";

const Navbar = () => {
  const option = {
    dropdown: false,
    notify: false,
  };
  const [drop, setdrop] = useState(option);
  const { user, logoutUser, photo } = useAppContext();

  const navigate = useNavigate();

  const gotoprofile = (e) => {
    e.stopPropagation();
    navigate(`/chats`);
  };

  const profileoption = () => {
    setdrop({ notify: false, dropdown: !drop.dropdown });
  };

  const notifyoption = (e) => {
    e.stopPropagation();
    setdrop({ notify: !drop.notify, dropdown: false });
  };
  return (
    <Wrapper>
      <nav className="navbar sticky">
        <Logo />

        <NavLinks />

        <div className="nav-content ">
          {/* <div className="notify">
            <IoIosNotifications className="bell-icon" onClick={notifyoption} />
            <span>20</span>
          </div> */}
          <img className="profile-pic-sm" src={photo} alt="" />
          <div className="dropdown-menus">
            <h5 onClick={profileoption}>{user.username}</h5>

            <ul
              className={
                drop.dropdown ? "dropdown-options glassmorphism" : "d-none"
              }
            >
              <li onClick={(e) => gotoprofile(e)}>Chat</li>
              <li onClick={() => logoutUser()}>logout</li>
            </ul>
          </div>
        </div>
      </nav>
      {drop.notify ? <Notifylst /> : null}
    </Wrapper>
  );
};

export default Navbar;
