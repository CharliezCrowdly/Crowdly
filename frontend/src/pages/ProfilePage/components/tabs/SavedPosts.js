import React,{useEffect,useState} from 'react'
import { useAppContext } from '../../../../context/appContext'
import Postmodel from "../../../ExplorePage/component/Postmodel";
import { Postbox } from "../../components";
import Wrapper from "../../wrappers/UserPost";
const SavedPosts = () => {
    const {user} = useAppContext()
    const [postlst,setpost] = useState([])
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
          explorelst={profilePost}
          closeslide={closeslide}
        />
      </div>
    </Wrapper>
  );
}

export default SavedPosts