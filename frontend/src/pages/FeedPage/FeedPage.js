import React from "react";
import Wrapper from "./wrapper/FeedPage";
import Searchbar from "./component/Searchbar";

import lstrecommendation from "../../utils/lstrecommendation";

import { Recommendation } from "../../component";
import { PostContainer } from "./component";

const FeedPage = () => {
  return (
    <Wrapper>
      <div className="feedPage">
        <div className="middle-container">
          <Searchbar />
          <PostContainer />
        </div>
        <div className="right-container">
          {lstrecommendation.map((item) => (
            <Recommendation item={item} key={item.id} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default FeedPage;