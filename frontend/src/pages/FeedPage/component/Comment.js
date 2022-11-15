import React, { useState } from "react";
import Wrapper from "../wrapper/CommentList";
import { MdDelete } from "react-icons/md";
import { useAppContext } from "../../../context/appContext";

const Comment = ({ item }) => {
  const { commentedBy, content } = item;
  const { commentDelete } = useAppContext();

  const [isDelete, setDelete] = useState(false);

  const deleteComment = (e) => {
    setDelete(true);
    e.preventDefault();
    commentDelete({ commentId: item._id });
  };

  return (
    <Wrapper>
      <div className={!isDelete ? "comment-lst " : "d-none"}>
        <div className="comment-header">
          <img
            src={commentedBy.profilePicture}
            className="profile-pic-xm"
            alt=""
          />
          <span className="username">{commentedBy.username}</span>

          <span className="description">{content}</span>
        </div>

        <MdDelete onClick={deleteComment} />
      </div>
    </Wrapper>
  );
};

export default Comment;
