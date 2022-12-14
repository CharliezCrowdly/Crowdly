import React, { useState, useRef } from "react";
import { useEffect } from "react";
import Wrapper from "../../ExplorePage/wrapper/Postmodel";

import { BsThreeDots } from "react-icons/bs";
import { useAppContext } from "../../../context/appContext";
import {
  IoMdArrowDroprightCircle,
  IoMdArrowDropleftCircle,
} from "react-icons/io";

import { IoClose } from "react-icons/io5";
import ModelComment from "../../ExplorePage/component/ModelComment";
import Postcomment from "../../ExplorePage/component/Postcomment";
import Postoptions from "./Postoptions"

const Postmodel = React.memo(({ slideIndex, explorelst, closeslide,removepost }) => {
  useEffect(() => {
    goToSlide(slideIndex);
  }, [slideIndex]);
  const { isLoading } = useAppContext();
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
              const { postfile, userid, filetype ,location,_id} = item;

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
                      <BsThreeDots />
                    </div>
                    <ModelComment
                      postID={item._id}j
                      toggleCommentload={toggleCommentload}
                      loadComment={loadComment.current}
                    />

                    <Postoptions item ={item} removepost={removepost}/>

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
