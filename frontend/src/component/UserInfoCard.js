import React from "react";
import Wrapper from "../wrappers/UserInfoCard";
const UserInfoCard = () => {
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
        <div className="username">Andrew Rashford</div>
        <div className="userskill">FrontEnd Developer</div>
        <div className="edit-profile">Edit Profile</div>
      </div>
    </Wrapper>
  );
};

export default UserInfoCard;
