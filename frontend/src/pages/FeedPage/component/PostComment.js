import React, { useRef } from "react";
import { useAppContext } from "../../../context/appContext";
import Wrapper from "../wrapper/PostComment";
const PostComment = ({ startCommentload, postId }) => {
  const { user, commentOnPost } = useAppContext();
  const inputRef = useRef("");

  const onSubmit =async (e) => {
  
    e.preventDefault();
    await commentOnPost({ commentInfo: inputRef.current.value, postId });
    inputRef.current.value = "";
    startCommentload()
  };


  return (
    <Wrapper>
      <form className="comment-form ">
        <img className="profile-pic-sm" src={user.profilePicture} alt="" />

        <input
          ref={inputRef}
          type="text"
          className="description"
          placeholder="Enter Description"
        />
        <button type="submit" className="btn-post" onClick={onSubmit}>
          post
        </button>
      </form>
    </Wrapper>
  );
};

export default PostComment;
