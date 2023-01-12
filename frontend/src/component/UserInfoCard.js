import React, { useState } from "react";
import Wrapper from "../wrappers/UserInfoCard";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";

const UserInfoCard = () => {
  const { user, naam, photo } = useAppContext();
  const navigate = useNavigate();

  return (
    <Wrapper className="user-card">
      <div className="info-card glassmorphism">
        <div className="userimage">
          <img className="profile-pic-xL" src={photo} alt="" />
        </div>
        <div className="username">{naam}</div>
        <div className="userskill" style={{ textTransform: "capitalize" }}>
          {user.usertype}
        </div>
        {user.usertype == "individual" ? (
          <>
            <div
              className="edit-profile"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/user/edit")}
            >
              Edit Profile
            </div>
            <div
              className="edit-profile"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/user/card")}
            >
              My Card
            </div>
          </>
        ) : user.usertype == "admin" ? (
          <div
            className="edit-profile"
            onClick={() => navigate("/user/payments")}
            style={{ cursor: "pointer" }}
          >
            View Payments
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
