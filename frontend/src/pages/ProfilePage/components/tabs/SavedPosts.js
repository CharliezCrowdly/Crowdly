import React, { useEffect, useState } from "react";
import { useAppContext } from "../../../../context/appContext";
import Postmodel from "../../../ExplorePage/component/Postmodel";
import { Postbox } from "../../components";
import Wrapper from "../../wrappers/UserPost";
import axios from "axios";
const SavedPosts = () => {
  const { token } = useAppContext();
  const [postlst, setpost] = useState([]);
   const options = {
     slideIndex: 0,
   };
   const [option, setOptions] = useState(options);
   const openSlide = (number) => {
     setOptions({ isModel: true, slideIndex: number });
   };

   const closeslide = () => {
     setOptions({ ...option, isModel: false });
   };

  const getsavedpost = async () => {
    await axios
      .get(`/api/v1/posts/savedPost`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setpost(res.data.posts);
      });
  };

  useEffect(() => {
    getsavedpost();
  }, []);
  return (
    <Wrapper>
      {postlst.map((item, index) => {
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
          explorelst={postlst}
          closeslide={closeslide}
        />
      </div>
    </Wrapper>
  );
};

export default SavedPosts;
