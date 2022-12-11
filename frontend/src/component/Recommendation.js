import React, { useState } from "react";
import Wrapper from "../wrappers/Recommendation";
import { useAppContext } from "../context/appContext";
const Recommendation = ({ item }) => {
  const { token, followUser, unfollowUser } = useAppContext();
  const { name, mutual, profilePicture } = item;
  const [follow, setfollow] = useState(false);

  const togglefollow = () => {
    if (follow) {
      setfollow(false);
      unfollowUser(item._id);
            console.log("unfollow");

    } else {
      setfollow(true);
      followUser(item._id);
      console.log("follow")
    }
  };
  return (
    <Wrapper className="user-recommendation">
      <div className="recommendation glassmorphism">
        <div className="user-content">
          <img src={profilePicture} className="profile-pic-sm" alt="" />
          <div className="user-info">
            <p className="username">{name}</p>
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
