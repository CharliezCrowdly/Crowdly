import React ,{useState,useEffect} from 'react'
import { useAppContext } from '../../../context/appContext';
import axios from 'axios';
import SingleComment from './SingleComment';
const ModelComment = React.memo(
  ({ postID, toggleCommentload,loadComment }) => {
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
        <div className="comments-lst ">
          {comments.map((item) => {
            return <SingleComment item={item} key={item._id} />;
          })}
        </div>
      );
    } else {
      return <div></div>;
    }
  }
);

export default ModelComment
