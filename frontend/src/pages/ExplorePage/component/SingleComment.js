import React, { useState } from "react";
import { useAppContext } from "../../../context/appContext";
import Wrapper from "../wrapper/SingleComment";
import moment from "moment";

import { MdDelete } from "react-icons/md";

const SingleComment = ({ item }) => {
  const { commentedBy, content, createdAt } = item;
  const { commentDelete, user } = useAppContext();

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
          <div className="comment-box">
            <div className="comment-info">
              <span className="username">{commentedBy.username}</span>
              <span className="description">{content}</span>
            </div>
            <p className="comment-time">{moment(createdAt).fromNow()}</p>
          </div>
          <MdDelete
            onClick={deleteComment}
            className={user._id === commentedBy._id ? "btn-delete" : "d-none"}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default SingleComment;
