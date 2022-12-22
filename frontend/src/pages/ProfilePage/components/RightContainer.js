import React, { useState } from "react";
import {
  Coverimage,
  Followinglst,
  Followlst,
  CreatedJob,
} from "../components/index";
import Wrapper from "../wrappers/RightContainer";
import Tabs from "../components/Tabs";
import {
  Cv,
  UserPost,
  JobHistory,
  SavedJobs,
  SavedPosts,
} from "../components/tabs/index";
const RightContainer = React.memo(({ profileUser, profilePost }) => {
  const [activeindex, setActive] = useState(0);
  const [subtract, setSubtract] = useState(0);
 

  const setTab = (index) => {
    setActive(index);
  };

  const changeactive = (index) => {
    setActive(index);
  };

  const ufother = () => {
    setSubtract((prev) => --prev);
  };

  const fother = () => {
    setSubtract((prev) => ++prev);
  };

  return (
    <Wrapper className="">
      <Coverimage
        coverimage={profileUser.coverpage}
        changeactive={changeactive}
        activeindex={activeindex}
        subtract={subtract}
       
      />
      <Tabs activeindex={activeindex} setTab={setTab} />

      {activeindex === 0 ? <UserPost /> : null}
      {activeindex === 1 ? <Cv /> : null}
      {activeindex === 2 ? <SavedPosts /> : null}
      {activeindex === 3 ? <SavedJobs /> : null}
      {activeindex === 4 ? <JobHistory /> : null}
      {activeindex === 5 ? <Followlst /> : null}
      {activeindex === 6 ? (
        <Followinglst ufother={ufother} fother={fother} />
      ) : null}
      {activeindex === 7 ? <CreatedJob /> : null}
    </Wrapper>
  );
});

export default RightContainer;
