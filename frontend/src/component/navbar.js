import React, { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Wrapper from "../wrappers/Navbar";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
import Notifylst from "./Notifylst";
import { BsFillChatDotsFill } from "react-icons/bs";
import { FaKey } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";

import { IoMdArrowDropdown } from "react-icons/io";

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

        <div className="nav-content glassmorphism " onClick={profileoption}>
          {/* <div className="notify">
            <IoIosNotifications className="bell-icon" onClick={notifyoption} />
            <span>20</span>
          </div> */}
          <img className="profile-pic-sm" src={photo} alt="" />
          <div className="dropdown-menus ">
            <h5>{user.username}</h5>

            <ul
              className={
                drop.dropdown ? "dropdown-options glassmorphism" : "d-none"
              }
            >
              <li onClick={(e) => gotoprofile(e)}>
                <span>
                  <BsFillChatDotsFill />
                </span>
                <span>Chat</span>
              </li>
              <li onClick={() => navigate("/user/changepassword")}>
                <span>
                  <FaKey />
                </span>
                <span>changepassword</span>
              </li>

              <li onClick={() => logoutUser()}>
                <span>
                  <IoLogOut />
                </span>
                <span>logout</span>
              </li>
            </ul>
          </div>

          <IoMdArrowDropdown
            className={drop.dropdown ? "icon active" : "icon"}
          />
        </div>
      </nav>
      {drop.notify ? <Notifylst /> : null}
    </Wrapper>
  );
};

export default Navbar;
