import React,{useRef} from "react";
import Wrapper from "./wrapper/FeedPage";
import Searchbar from "./component/Searchbar";

import lstrecommendation from "../../utils/lstrecommendation";

import { Recommendation,Alert, Recommendationlst } from "../../component";
import { PostContainer } from "./component";
import { useAppContext } from "../../context/appContext";
import Todo from "../JobDetail/component/Todo";

const FeedPage = () => {

    const { showAlert } = useAppContext();
    const loadRef = useRef(true);

    const toggleload = () => {
      loadRef.current = true;
    };

    const stopload = () => {
      loadRef.current = false;
    };

  return (
    <Wrapper>
      <div className="feedPage">
        <div className="middle-container">
          {showAlert && <Alert />}

          <Searchbar toggleload={toggleload} />
          <PostContainer postLoad={loadRef.current} toggleload={stopload} />
        </div>
        <div className="right-container">
          <Recommendationlst />

          <Todo/>
        </div>
      </div>
    </Wrapper>
  );
};

export default FeedPage;
