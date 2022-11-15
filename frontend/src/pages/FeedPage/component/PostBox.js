import React, { useState, useEffect, useRef } from "react";
import { BsThreeDots, BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { AiFillHeart, AiFillEdit } from "react-icons/ai";
import { FaComment, FaShare } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import disk from "../../../assets/images/disk.png";
import Wrapper from "../wrapper/PostBox";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import { useAppContext } from "../../../context/appContext";
import PostComment from "./PostComment";
import Commentlst from "./Commentlst";

const PostBox = React.memo(({ item }) => {
  const { user, likepost, unlikepost } = useAppContext();

  const loadComment = useRef(false);

  const stopCommentload = () => {
    loadComment.current = false;
    console.log("stopComentload");
  };

  const startCommentload = () => {
    loadComment.current = true;
    console.log("startComentload");
  };

  const {
    userid,
    location,

    filetype,
    postfile,
    description,
    createdAt,
  } = item;

  const doc = {
    uri: postfile,
  };

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

  const vidRef = useRef(null);
  const onentry = () => {
    vidRef.current.play();
  };

  const onleave = () => {
    vidRef.current.pause();
  };

  const toggleLike = (e) => {
    e.preventDefault();
    const postid = item._id;
    if (postState.liked) {
      unlikepost({postid})
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

  const togglesave = () => {
    if (postState.bookmarked) {
      SetPost({ ...postState, bookmarked: false });
    } else {
      SetPost({ ...postState, bookmarked: true });
    }
  };

  const toggleOption = () => {
    if (postState.isoption) {
      SetPost({ ...postState, isoption: false });
    } else {
      SetPost({ ...postState, isoption: true });
    }
  };

  const deletePost = () => {
    if (postState.isDelete) {
      SetPost({ ...postState, isDelete: false });
    } else {
      SetPost({ ...postState, isDelete: true });
    }
  };

  const toggleComment = (e) => {
    if (postState.isComment) {
      SetPost({ ...postState, isComment: false });
      loadComment.current = false;
    } else {
      SetPost({ ...postState, isComment: true });
      loadComment.current = true;
    }
  };

  const toggleReadMore = (e) => {
    if (postState.isReadMore) {
      SetPost({ ...postState, isReadMore: false });
    } else {
      SetPost({ ...postState, isReadMore: true });
    }
  };

  const togglepostBar = () => {
    SetPost({ ...postState, isPost: !postState.isPost });
  };

  const desc =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, culpa, tenetur repudiandae dolor cupiditate perferendis, mollitia placeat sit ad dolore quasi dolores corporis iste autem eius numquam quia nostrum delectus!";
  return (
    <Wrapper>
      <div
        className={!postState.isDelete ? "video-post glassmorphism" : "d-none"}
      >
        <div className="post-content">
          {/* absolute */}
          <div className="post-header ">
            <div className="userInfo">
              <img
                src={userid.profilePicture}
                alt=""
                className="profile-pic-sm"
              />
              <div className="username-location">
                <span className="username">{userid.username}</span>
                <p className="location">{location}</p>
              </div>
            </div>
            <div className="post-edit">
              <BsThreeDots
                className={userid._id === user._id ? "icon" : "d-none"}
                onClick={toggleOption}
              />

              <div
                className={
                  postState.isoption ? "edit-option glassmorphism" : "d-none"
                }
              >
                <AiFillEdit className="icon" />
                <MdDelete className="icon" onClick={deletePost} />
              </div>
            </div>
          </div>
          <div className="post-image-section">
            {filetype.substring(0, filetype.indexOf("/")) === "image" ? (
              <img
                onDoubleClick={toggleLike}
                className="post-img"
                src={postfile}
                alt=""
              />
            ) : (
              ""
            )}

            {filetype.substring(0, filetype.indexOf("/")) === "video" ? (
              <video
                className="post-img"
                muted
                loop
                ref={vidRef}
                controls={true}
                onMouseEnter={onentry}
                onMouseLeave={onleave}
              >
                <source type="video/mp4" src={postfile} />
              </video>
            ) : (
              ""
            )}

            {filetype.substring(0, filetype.indexOf("/")) === "audio" ? (
              <div
                className="post-img"
                onMouseEnter={onentry}
                onMouseLeave={onleave}
              >
                <img src={disk} alt="" className="music-img" />
                <audio
                  className="music-player"
                  loop
                  ref={vidRef}
                  controls={true}
                >
                  <source className="music" type={filetype} src={postfile} />
                </audio>
              </div>
            ) : (
              ""
            )}

            {filetype.substring(
              0,
              filetype.indexOf("/") === "application" ? (
                <div className="post-img">
                  <DocViewer
                    className="post-img"
                    pluginRenderers={DocViewerRenderers}
                    documents={doc}
                  />
                </div>
              ) : (
                ""
              )
            )}
          </div>
          {/* absolute */}
          <span className="post-description ">
            {postState.isReadMore ? description : desc.substring(0, 100)}
          </span>
          <span className="more-less">
            {postState.isReadMore ? "...less" : "...more"}
          </span>
        </div>

        <div className="post-option">
          <div className="post-interaction">
            <AiFillHeart
              className={postState.liked ? "icon red" : "icon"}
              onClick={toggleLike}
            />

            <FaComment className="icon" onClick={togglepostBar} />
            <FaShare className="icon" />
          </div>

          {postState.bookmarked ? (
            <BsFillBookmarkFill className="icon black" onClick={togglesave} />
          ) : (
            <BsBookmark className="icon" onClick={togglesave} />
          )}
        </div>
        <div className="like-count">{postState.likecount} likes</div>

        <div className="post-description">
          <span className="username">{userid.username}</span>
          <span className="post-desc ">
            {postState.isReadMore ? description : description.substring(0, 100)}
          </span>
          <span className="more-less" onClick={toggleReadMore}>
            {postState.isReadMore ? "...less" : "...more"}
          </span>
        </div>
        <span className="view-comments" onClick={toggleComment}>
          {postState.isComment ? "close all comments" : "view all comments"}
        </span>
      </div>

      <div className={postState.isComment ? "" : "d-none"}>
        <Commentlst
          loadComment={loadComment.current}
          postID={item._id}
          toggleCommentload={stopCommentload}
        />
      </div>

      <div className={postState.isPost ? "" : "d-none"}>
        <PostComment startCommentload={startCommentload} postId={item._id} />
      </div>
    </Wrapper>
  );
});

export default PostBox;
