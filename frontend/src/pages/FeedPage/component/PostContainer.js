import React from "react";
import PostBox from "./PostBox";
import lstpost from "../../../utils/lstpost";
const PostContainer = React.memo(({ postLoad, toggleload }) => {


  return (
    <div className="list">
      {/* {result.map((item)=><div>hello</div> )} */}
      {lstpost.map((item) => {
        const { id } = item;

        return <PostBox key={id} item={item} />;
      })}
    </div>
  );
});

export default PostContainer;
