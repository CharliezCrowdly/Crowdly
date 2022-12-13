import React, { useRef, useEffect } from "react";
import { LeftContainer, RightContainer } from "./components";
import Wrapper from "./wrappers/ProfilePage";
import { useAppContext } from "../../context/appContext";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const profileload = useRef(true);
  const {
    userProfile,
    profileUser,
    profilePost,
    isLoading,
    followers,
    followings,
  } = useAppContext();
  const { id: userId } = useParams();

  useEffect(() => {
    if (profileload.current === true) {
      userProfile(userId);
    }

    return () => (profileload.current = false);
  }, [userId]);

  if(isLoading){
    return <div></div>
  }
  return (
    <Wrapper className="">
      <div className="leftcontainer">
        <LeftContainer profileUser={profileUser} />
      </div>
      <div className="rightcontainer ">
        <RightContainer  profileUser={profileUser} profilePost={profilePost} />
      </div>
    </Wrapper>
  );
};

export default ProfilePage;
