import React from "react";
import Wrapper from "../../wrappers/formwrappers/underlineInput";

const UnderlineInput = ({ type, name, value, handleChange, placeholder }) => {
  return (
    <Wrapper>
      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        className="underlineInput-container"
      />
    </Wrapper>
  );
};

export default UnderlineInput;
