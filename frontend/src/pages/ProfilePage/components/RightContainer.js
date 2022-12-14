import React, { useState } from "react";
import {  Coverimage } from "../components/index";
import Wrapper from "../wrappers/RightContainer";
import Tabs from "../components/Tabs"
import {
  Cv,
  UserPost,
  JobHistory,
  PendingApplication,
  SavedJobs,
  SavedPosts
} from "../components/tabs/index";
const RightContainer = React.memo(({ profileUser, profilePost }) => {
  const [activeindex, setActive] = useState(0);

  const setTab = (index) => {
    setActive(index);
  };
  return (
    <Wrapper className="">
      <Coverimage />
      <Tabs activeindex={activeindex} setTab={setTab} />

      {activeindex === 0 ? <UserPost /> : null}
      {activeindex === 1 ? <JobHistory /> : null}
      {activeindex === 2 ? <PendingApplication /> : null}
      {activeindex === 3 ? <Cv /> : null}
      {activeindex === 4 ? <SavedJobs /> : null}
      {activeindex === 5 ? <SavedPosts /> : null}
    </Wrapper>
  );
});

export default RightContainer;
