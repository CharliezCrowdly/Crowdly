import React from "react";
import Wrapper from "../wrappers/Profileinfo";

const Profileinfo = () => {
  return (
    <Wrapper>
      <section className="info glassmorphism">
        <div className="shortinfo ">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            alt=""
            className="profile-pic-sm"
          />
          <div className="counts">
            <span className="header">posts</span>
            <span className="header">followers</span>
            <span className="header">following</span>
            <span className="sub-header">12</span>
            <span className="sub-header">222</span>
            <span className="sub-header">444</span>
          </div>
        </div>
        <h2>John</h2>
        <div>
          <span>Fullname:John Doe | Location: My city</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            eaque!
          </p>
        </div>
      </section>
    </Wrapper>
  );
};

export default Profileinfo;
