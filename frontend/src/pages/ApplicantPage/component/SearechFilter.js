import React from "react";
import Wrapper from "../wrappers/SearechFilter";
const SearechFilter = ({ filter, handleChange }) => {
  return (
    <Wrapper className=" ">
      {" "}
      <input
        name="title"
        type="search"
        className="search-container"
        placeholder="search user"
        onChange={handleChange}
      />
      <button onClick={filter}>Filter</button>
    </Wrapper>
  );
};

export default SearechFilter;
