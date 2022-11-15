import React,{useEffect} from "react";
import PostBox from "./PostBox";
import lstpost from "../../../utils/lstpost";
import { useAppContext } from "../../../context/appContext";

const PostContainer = React.memo(({ postLoad, toggleload }) => {
  const { userfeed, getallPosts } = useAppContext();
   
    useEffect(() => {
      if (postLoad === true) {
        getallPosts();
      }

      console.log("postcontainer");
      return () => {
        toggleload();
      };
    }, [postLoad]);
  return (
    <div className="list">
      {userfeed.map((item) => {
        const { id } = item;

        return <PostBox key={item._id} item={item} />;
      })}
    </div>
  );
});

export default PostContainer;
