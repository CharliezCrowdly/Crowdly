import React from "react";
import Wrapper from "../../wrappers/formwrappers/ListInput";
const ListInput = ({ handleChange, Add, Remove, value }) => {
  return (
    <Wrapper className="lstinput">
      <div className="listinput">
        <input type="text" onChange={handleChange} value={value} />
        <div className="icons">
          <span onClick={Add}>+</span>
          <span onClick={Remove}>-</span>
        </div>
      </div>
    </Wrapper>
  );
};

export default ListInput;
