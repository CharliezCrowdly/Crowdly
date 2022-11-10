import React, { useState, useRef } from "react";
import Wrapper from "./wrapper/FeedPage";

import lstrecommendation from "../../utils/lstrecommendation";

import { Recommendation } from "../../component";

const FeedPage = () => {
  return (
    <Wrapper>
      <div className="feedPage">
        <div className="middle-container"></div>
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
