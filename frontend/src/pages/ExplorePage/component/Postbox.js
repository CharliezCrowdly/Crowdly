import React, { useRef } from "react";
import { FaPlay } from "react-icons/fa";

const Postbox = ({ postfile, filetype, index, openmodel }) => {
  const vidRef = useRef();
  const onentry = () => {
    vidRef.current.play();
  };

  const onleave = () => {
    vidRef.current.pause();
  };
  return (
    <div className="post-container">
      {filetype.substring(0, filetype.indexOf("/")) === "image" ? (
        <img className="post-img" src={postfile} alt="" loading="lazy" />
      ) : (
        ""
      )}
      {filetype.substring(0, filetype.indexOf("/")) === "video" ? (
        <div className="video-container">
          <FaPlay className="play-icon" />

          <video
            ref={vidRef}
            className="post-img"
            onMouseEnter={onentry}
            onMouseLeave={onleave}
            muted
            loop
            controls={false}
          >
            <source type="video/mp4" src={postfile} />
          </video>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Postbox;
