import React from "react";
import Wrapper from "../../wrappers/formwrappers/LabelInput";

const Labelinput = ({
  type,
  label,
  name,
  placeholder,
  handleChange,
  value,
}) => {
  return (
    <Wrapper>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </Wrapper>
  );
};

export default Labelinput;
