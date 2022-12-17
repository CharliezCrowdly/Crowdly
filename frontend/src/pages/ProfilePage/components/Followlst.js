import React from "react";
import Wrapper from "../wrappers/Following";
import { useAppContext } from "../../../context/appContext";

const Followlst = () => {
     const { profileUser,removefollower } = useAppContext();
     const {  followers } = profileUser;
     var filterlst = followers;
  return (
    <Wrapper>
 
      {filterlst.map((item) => {
        return (
          <div className="signalfollow " key={item._id}>
            <div className="info">
              <img src={item.profilePicture} alt="" />
              <span>{item.username}</span>
            </div>

            <button onClick={()=>removefollower(item._id)}>remove</button>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default Followlst;
