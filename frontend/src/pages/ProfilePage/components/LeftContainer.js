import React from "react";
import Wrapper from "../wrappers/LeftContainer";

import {UserInfoCard} from "../../../component"

const LeftContainer = React.memo(({profileUser}) => {
  return (
    <Wrapper >
      <UserInfoCard  />
    </Wrapper>
  );
});

export default LeftContainer;
