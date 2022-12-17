import React, { useState } from "react";

import { useAppContext } from "../../../context/appContext";

const SingleFollowing = ({ item, fother, ufother }) => {
  const { followUser, unfollowUser, user,profileUser } = useAppContext();
  const [state, setState] = useState(true);

  const togglefollow = (userId) => {
    if (state) {
      fother();
      setState(false);
      unfollowUser(userId);
    } else {
      ufother();
      setState(true);
      followUser(userId);
    }
  };
  return (
    <div className="signalfollow ">
      <div className="info">
        <img src={item.profilePicture} alt="" />
        <span>{item.username}</span>
      </div>

      {profileUser._id === user._id ? (
        <button
          className={state ? "btn-uf active" : "btn-uf"}
          onClick={() => togglefollow(item._id)}
        >
          {state ? "unFollow" : "Follow"}
        </button>
      ) : null}
    </div>
  );
};

export default SingleFollowing;
