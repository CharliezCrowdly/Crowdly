import React from "react";
import Wrapper from "../wrappers/SearechFilter";
const SearechFilter = () => {
  return (
    <Wrapper className="glassmorphism ">
      {" "}
      <input
        type="search"
        className="search-container"
        placeholder="search user"
      />
      <button>Filter</button>
      <p></p>
    </Wrapper>
  );
};

export default SearechFilter;
