import React, { useState } from "react";
import Wrapper from "../wrappers/UserInfoCard";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";

const UserInfoCard = () => {
  const { user } = useAppContext();
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div className="info-card glassmorphism">
        <div className="userimage">
          <img
            className="profile-pic-xL"
            src="https://us.123rf.com/450wm/molokowall/molokowall2201/molokowall220100015/180568257-young-smiling-man-adam-avatar-3d-vector-people-character-illustration-cartoon-minimal-style-.jpg?ver=6"
            alt=""
          />
        </div>
        <div className="username">{user.username}</div>
        <div className="userskill">FrontEnd Developer</div>
        {user.usertype == "individual" ? (
          <div
            className="edit-profile"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/user/add/job")}
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
