import React from "react";
import { useAppContext } from "../../../context/appContext";
import Wrapper from "../wrappers/Following";
import SingleFollowing from "./SingleFollowing";

const Followinglst = ({ufother,fother}) => {
  const { profileUser } = useAppContext();
  const { following } = profileUser;
  var filterlst = following;

  return (
    <Wrapper>
      {filterlst.map((item,index) => {
        return <SingleFollowing item={item} key={item._id} fother ={fother} ufother ={ufother} />;
      })}
    </Wrapper>
  );
};

export default Followinglst;
