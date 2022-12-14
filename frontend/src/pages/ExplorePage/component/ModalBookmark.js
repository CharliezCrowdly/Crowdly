import React, { useState, useEffect } from "react";
import { useAppContext } from "../../../context/appContext";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
const ModalBookmark = ({ saved, postid }) => {
  const [postState, SetPost] = useState(false);

  const { user, savepost, unsavepost } = useAppContext();

  useEffect(() => {
    if (saved.find((like) => like === user._id)) {
      SetPost(true);
      // postState.liked= true
    } else {
      // postState.liked = false
      SetPost(false);
    }
  }, [saved, user._id]);

  const togglesave = () => {
    if (postState) {
      unsavepost({ postid });
      SetPost(false);
    } else {
      savepost({ postid });
      SetPost(true);
    }
  };
  return (
    <div>
      {" "}
      {postState ? (
        <BsFillBookmarkFill className="icon black" onClick={togglesave} />
      ) : (
        <BsBookmark className="icon" onClick={togglesave} />
      )}
    </div>
  );
};

export default ModalBookmark;
