import React, { useRef } from "react";
import { FaPlay } from "react-icons/fa";
import {ImMusic} from "react-icons/im"
import Wrapper from "../wrappers/Postbox"

const Postbox = ({ postfile, filetype,description  }) => {
  const vidRef = useRef();
  const onentry = () => {
    vidRef.current.play();
  };

  const onleave = () => {
    vidRef.current.pause();
  };
  return (
    <Wrapper className="post-container">
      {filetype.substring(0, filetype.indexOf("/")) === "image" ? (
        <img className="post" src={postfile} alt="" />
      ) : (
        ""
      )}
      {filetype.substring(0, filetype.indexOf("/")) === "video" ? (
        <div className="post">
          <FaPlay className="icon" />

          <video
            ref={vidRef}
            className="video-player"
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
      {filetype.substring(0, filetype.indexOf("/")) === "audio" ? (
        <div className="post" onMouseEnter={onentry} onMouseLeave={onleave}>
          <ImMusic className="icon"/>
          <audio
            className="music-player"
            muted
            loop
            ref={vidRef}
            controls={true}
          >
            <source type={filetype} src={postfile} />
          </audio>
        </div>
      ) : (
        ""
      )}

      {filetype.substring(
        0,
        filetype.indexOf("/") === "application" ? (
          <div className="post">
            {/* <DocViewer
              className="post-img"
              pluginRenderers={DocViewerRenderers}
              documents={doc}
            /> */}
          </div>
        ) : (
          ""
        )
      )}
    </Wrapper>
  );
};

export default Postbox;
