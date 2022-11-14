import React, { useState } from "react";
import Wrapper from "../wrappers/Recommendation"

const Recommendation = ({item}) => {

    const {id,username,mutual,profilePic} = item
  const [follow, setfollow] = useState(false);

  const togglefollow = () => {
    if (follow) {
      setfollow(false);
    } else {
      setfollow(true);
    }
  };
  return (
    <Wrapper>
      <div className="recommendation glassmorphism">
        <div className="user-content">
        <img src={profilePic} className="profile-pic-sm" alt="" />
          <div className="user-info">
              <p className="username">{username}</p>
              <span className="mutual">{mutual} mutual friend</span>
          </div>
        </div>
        {!follow ? (
          <button className="btn-follow" onClick={togglefollow}>
            follow
          </button>
        ) : (
          <button className="btn-unfollow" onClick={togglefollow}>
            unfollow
          </button>
        )}
      </div>
    </Wrapper>
  );
};

export default Recommendation;
