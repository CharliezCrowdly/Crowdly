import React, { useState } from "react";
import Wrapper from "../wrappers/UserInfoCard";
import { useAppContext } from "../../../context/appContext";
import { useNavigate } from "react-router-dom";
import Followbtn from "./Followbtn";

const UserInfoCard = ({ profileUser }) => {
  const { user } = useAppContext();
  const navigate = useNavigate();

  return (
    <Wrapper className="user-card">
      <div className="info-card glassmorphism">
        <div className="userimage">
          <img
            className="profile-pic-xL"
            src="https://us.123rf.com/450wm/molokowall/molokowall2201/molokowall220100015/180568257-young-smiling-man-adam-avatar-3d-vector-people-character-illustration-cartoon-minimal-style-.jpg?ver=6"
            alt=""
          />
        </div>
        <div className="username">{profileUser.username}</div>
        <div className="userskill">FrontEnd Developer</div>
        {profileUser._id != user._id ? (

          <Followbtn items={profileUser}/>
        ) : profileUser.usertype == "individual" ? (
          <div
            className="edit-profile"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/user/edit")}
          >
            Edit Profile
          </div>
        ) : (
          <div
            className="edit-profile"
            onClick={() => navigate("/user/add/job")}
            style={{ cursor: "pointer" }}
          >
            Add job
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default UserInfoCard;
