import React, { useState,useEffect } from "react";
import { useAppContext } from "../../../../context/appContext";
import Postmodel from "../../../ExplorePage/component/Postmodel";
import { Postbox } from "../../components";
import Wrapper from "../../wrappers/UserPost";
const UserPost = () => {
  const {  isLoading,profilePost } = useAppContext();
  const options = {
    slideIndex: 0,
  };
  const [option, setOptions] = useState(options);

  useEffect(()=>{

  },[isLoading])

  const openSlide = (number) => {
    setOptions({ isModel: true, slideIndex: number });
  };

  const closeslide = () => {
    setOptions({ ...option, isModel: false });
  };

  if (isLoading) {
    return <div></div>;
  } else {
    return (
      <Wrapper>
        {profilePost.map((item, index) => {
          const { postfile, filetype, description } = item;

          return (
            <div
              key={item._id}
              className="posts"
              onClick={() => openSlide(index)}
            >
              <Postbox
                postfile={postfile}
                filetype={filetype}
                description={description}
              />
            </div>
          );
        })}

        <div className={option.isModel ? "yomodel" : "d-none"}>
          <Postmodel
            slideIndex={option.slideIndex}
            explorelst={profilePost}
            closeslide={closeslide}
          />
        </div>
      </Wrapper>
    );
  }
};

export default UserPost;
