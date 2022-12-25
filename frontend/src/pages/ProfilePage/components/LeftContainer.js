import React from "react";
import Wrapper from "../wrappers/LeftContainer";

import UserInfoCard from "./UserInfoCard";

const LeftContainer = React.memo(({ profileUser }) => {
  return (
    <Wrapper>
      <UserInfoCard profileUser={profileUser} />
    </Wrapper>
  );
});

export default LeftContainer;
