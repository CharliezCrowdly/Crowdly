import React, { useEffect, useState } from "react";
import { useAppContext } from "../../../context/appContext";
import { AiFillHeart } from "react-icons/ai";
import { FaComment, FaShare } from "react-icons/fa";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import Wrapper from "../../ExplorePage/wrapper/Postoptions";
import ModalBookmark from "./ModalBookmark";
const Postoptions = React.memo(({ item,removepost }) => {
  const { user, unlikepost, likepost } = useAppContext();

  const initialState = {
    liked: false,
    bookmarked: false,
    isReadMore: false,
    isoption: false,
    isDelete: false,
    isComment: false,
    isPost: false,
    likecount: 0,
    commentcount: 0,
  };
  const [postState, SetPost] = useState(initialState);

  useEffect(() => {
    if (item.likesid.find((like) => like === user._id)) {
      SetPost({
        ...postState,
        liked: true,
        likecount: item.likesid.length,
        commentcount: item.commentsid.length,
      });
      // postState.liked= true
    } else {
      // postState.liked = false
      SetPost({
        ...postState,
        liked: false,
        likecount: item.likesid.length,
        commentcount: item.commentsid.length,
      });
    }
  }, [item.likesid, user._id]);
  const togglesave = () => {
    if (postState.bookmarked) {
      SetPost({ ...postState, bookmarked: false });
    } else {
      SetPost({ ...postState, bookmarked: true });
    }
  };

  const toggleLike = (e) => {
    e.preventDefault();
    const postid = item._id;
    if (postState.liked) {
      unlikepost({ postid });
      SetPost({
        ...postState,
        liked: false,
        likecount: postState.likecount - 1,
      });
    } else {
      likepost({ postid });

      SetPost({
        ...postState,
        liked: true,
        likecount: postState.likecount + 1,
      });
    }
  };

  return (
    <Wrapper>
      <div className="post-option">
        <div className="post-interaction">
          <AiFillHeart
            className={postState.liked ? "icon red" : "icon"}
            onClick={toggleLike}
          />

          <FaComment className="icon" />
          <FaShare className="icon" />
        </div>

        {/* {postState.bookmarked ? (
          <BsFillBookmarkFill className="icon black" onClick={togglesave} />
        ) : (
          <BsBookmark className="icon" onClick={togglesave} />
        )} */}

        <ModalBookmark saved={item.saved} postid={item._id} removepost={removepost}/>
      </div>
      <div className="like-count">{postState.likecount} likes</div>
    </Wrapper>
  );
});
export default Postoptions;
