import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import axios from "axios";
import { useAppContext } from "../../../context/appContext";

const Commentlst = React.memo(({ loadComment, postID, toggleCommentload }) => {
  const { token } = useAppContext();
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  const listOutComment = ({ comment }) => {
    setComments(comment);
  };

  const getcomments = async () => {
    await axios
      .get(`/api/v1/comment/get/${postID}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        listOutComment({ comment: res.data.comment });
        setLoading(false);
      });
  };
  useEffect(() => {
    if (loadComment === true) {
      getcomments();
    }
    console.log("commentlst");

    return () => {
      toggleCommentload();
    };
  }, [loadComment]);

  if (!loading) {
    return (
      <div className="comments-section glassmorphism">
        {comments.map((item) => {
          return <Comment item={item} key={item._id} />;
        })}
      </div>
    );
  } else {
    return <div></div>;
  }
});

export default Commentlst;
