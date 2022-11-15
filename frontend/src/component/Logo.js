import React from "react";
import Wrapper from "../wrappers/Logo";

const Logo = () => {
  return (
    <Wrapper>
      <div className="logo-container">
        <div className="logo">
          <span className="circle-border">C</span>
        </div>
        <span className="logo-name">Crowdly</span>
      </div>
    </Wrapper>
  );
};

export default Logo;
