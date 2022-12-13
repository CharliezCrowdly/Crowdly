import React from "react";
import Wrapper from "../wrappers/Coverimage";

const Coverimage = ({ coverimage }) => {
  return (
    <Wrapper>
      <img
      className="coverimg"
        src="https://images.unsplash.com/photo-1635465756673-e7dee593d3fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        alt=""
      />
      <button className="btn-edit ">Edit Cover Page</button>
    </Wrapper>
  );
};

export default Coverimage;
