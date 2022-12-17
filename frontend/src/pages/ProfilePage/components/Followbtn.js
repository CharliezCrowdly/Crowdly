import React, { useState, useEffect } from "react";
import { useAppContext } from "../../../context/appContext";
import { useParams } from "react-router-dom";
const Followbtn = ({ items }) => {
  const [followed, setFollowed] = useState(false);
  const { id: userId } = useParams();
  const {
    user,

    followUser,

    unfollowUser,
  } = useAppContext();

  const togglefollow = () => {
    if (!followed) {
      followUser(userId);
      setFollowed(true);
    } else {
      unfollowUser(userId);
      setFollowed(false);
    }
  };

  useEffect(() => {
    if (items.followers?.find((item) => item._id === user._id)) {
      setFollowed(true);
    } else {
      setFollowed(false);
    }
  }, [userId, items.followers]);
  return (
    <div>
      {followed ? (
        <button
          className="btn btn-follow follow-btn"
          onClick={() => togglefollow()}
        >
          unfollow
        </button>
      ) : (
        <button
          className="btn btn-follow follow-btn"
          onClick={() => togglefollow()}
        >
          follow
        </button>
      )}
    </div>
  );
};

export default Followbtn;
