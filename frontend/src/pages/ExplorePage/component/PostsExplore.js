import React, { useRef, useState } from "react";
import Wrapper from "../wrapper/postsExplore";
import { useEffect } from "react";
import { useAppContext } from "../../../context/appContext";
import Postbox from "./Postbox";
import Postmodel from "./Postmodel";
import SearchBar from "./SearchBar";
import Explorelist from "../../../utils/Explorelist";

const PostsExplore = () => {
  const options = {
    isModel: false,
    slideIndex: 0,
  };
  const { explorePage, explorelst, isLoading } = useAppContext();

  const fetchpost = useRef(true);
  const [option, setOptions] = useState(options);

  const openSlide = (number) => {
    setOptions({ isModel: true, slideIndex: number });
  };

  const closeslide = () => {
    setOptions({ ...option, isModel: false });
  };

  useEffect(() => {
    if (fetchpost.current === true) {
      explorePage();
    }

    return () => (fetchpost.current = false);
  }, [explorePage]);

  if (isLoading) {
    return <div></div>;
  }
  return (
    <Wrapper>
      <SearchBar />

      <div className="posts">
        {explorelst.map((item, index) => {
          const { postfile, filetype } = item;
          return (
            <div
              key={item._id}
              className="post"
              onClick={() => openSlide(index)}
            >
              <Postbox postfile={postfile} filetype={filetype} index={index} />
            </div>
          );
        })}

        <div className={option.isModel ? "" : "d-none"}>
          <Postmodel
            slideIndex={option.slideIndex}
            explorelst={explorelst}
            closeslide={closeslide}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default PostsExplore;
