import React, { useState, useRef } from "react";
import { useEffect } from "react";
import { useAppContext } from "../../../context/appContext";
import Wrapper from "../wrapper/Postmodel";
import { BsThreeDots } from "react-icons/bs";
import {
  IoMdArrowDroprightCircle,
  IoMdArrowDropleftCircle,
} from "react-icons/io";

import { IoClose } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";

import ModelComment from "./ModelComment";
import Postcomment from "./Postcomment";
import Postoptions from "./Postoptions";

const Postmodel = React.memo(({ slideIndex, explorelst, closeslide }) => {
  useEffect(() => {
    goToSlide(slideIndex);
  }, [slideIndex]);
  const { isLoading, delPost, user } = useAppContext();
  const vidRef = useRef(null);
  const loadComment = useRef(true);

  const toggleCommentload = () => {
    loadComment.current = false;
  };

  const isCommentload = () => {
    loadComment.current = true;
  };

  const onentry = () => {
    vidRef.current.play();
  };

  const onleave = () => {
    vidRef.current.pause();
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? explorelst.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === explorelst.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (page) => {
    setCurrentIndex(page);
  };
  const initialState = {
    isoption: false,
    isDelete: false,
  };

  const [postState, SetPost] = useState(initialState);

  const toggleOption = () => {
    if (postState.isoption) {
      SetPost({ ...postState, isoption: false });
    } else {
      SetPost({ ...postState, isoption: true });
    }
  };

  const deletePost = (postid) => {
    if (postState.isDelete) {
      SetPost({ ...postState, isDelete: false });
    } else {
      delPost(postid);
      SetPost({ ...postState, isDelete: true });
    }
  };

  if (isLoading) {
    return <div></div>;
  }

  return (
    <Wrapper className="modely">
      <div className="slider">
        <IoClose className="btn-close" onClick={closeslide} />

        <div className="slider-icons">
          <IoMdArrowDroprightCircle
            className="next-icon"
            onClick={goToPrevious}
          />
          <IoMdArrowDropleftCircle className="prev-icon" onClick={goToNext} />
        </div>
        <div className="slider-content">
          <div className="slider-items">
            {explorelst.map((item, index) => {
              const { postfile, userid, filetype, location } = item;

              return (
                <div
                  key={item._id}
                  className={currentIndex === index ? "slide-model" : "d-none"}
                >
                  {filetype.substring(0, filetype.indexOf("/")) === "image" ? (
                    <img
                      src={postfile}
                      className={currentIndex === index ? "post-img" : "d-none"}
                      alt=""
                    />
                  ) : null}
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
                  <div className="comment-section">
                    <div className="user-content">
                      <div className="user-info">
                        <img
                          src={userid.profilePicture}
                          alt=""
                          className="profile-pic-sm"
                        />
                        <div className="post-info">
                          <span className="username">{userid.username}</span>
                          <span className="location">{location}</span>
                        </div>
                      </div>
                      <div className="post-edit">
                        <BsThreeDots
                          className={
                            userid?._id === user._id ? "icon" : "d-none"
                          }
                          onClick={toggleOption}
                        />

                        <div
                          className={
                            postState.isoption
                              ? "edit-option glassmorphism"
                              : "d-none"
                          }
                        >
                          <AiFillEdit
                            className="icon"
                            onClick={() => navigate(`/crowdly/postedit/${_id}`)}
                          />
                          <MdDelete
                            className="icon"
                            onClick={() => deletePost(item._id)}
                          />
                        </div>
                      </div>
                    </div>
                    <ModelComment
                      postID={item._id}
                      j
                      toggleCommentload={toggleCommentload}
                      loadComment={loadComment.current}
                    />

                    <Postoptions item={item} />

                    <Postcomment
                      postID={item._id}
                      isCommentload={isCommentload}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
});

export default Postmodel;
