import React ,{useRef}from "react";
import Wrapper from "../wrapper/Postcomment";
import { useAppContext } from "../../../context/appContext";

const Postcomment = ({ postID,isCommentload }) => {
  const { user,commentOnPost } = useAppContext();
  const description = useRef('')

  const onSubmit = async(e)=>{
    e.preventDefault()

    await  commentOnPost({commentInfo:description.current.value,postId:postID})
    description.current.value = ''
    isCommentload()

  }
  return (
    <Wrapper>
      <form className="post-form">
        <div className="input-container">
          <img src={user.profilePicture} className="profile-pic-xm" alt=""  />
          <input ref={description} type="text" placeholder="Enter Description" className="description" />
        </div>
        <button className="btn-post" onClick={onSubmit}>post</button>
      </form>
    </Wrapper>
  );
};

export default Postcomment;
