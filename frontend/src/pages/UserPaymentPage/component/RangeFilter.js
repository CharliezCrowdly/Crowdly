import React from "react";
import Wrapper from "../wrappers/RangeFilter";

const RangeFilter = React.memo(({ bid, handleChange }) => {

  
  return (
    <Wrapper className="glassmorphism">
      <div className="range">
        <p>Bid</p>
        <p>Rs {bid}</p>
      </div>
      <input
        type="range"
        min="0"
        name="wage"
        max="100000"
        onChange={handleChange}
        id=""
        
      />
    </Wrapper>
  );
});

export default RangeFilter;
