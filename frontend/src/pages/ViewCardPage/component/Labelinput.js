import React from "react";
import Wrapper from "../../../wrappers/formwrappers/LabelInput";

const Labelinput = ({
  type,
  label,
  name,
  placeholder,
  handleChange,
  value,
  maxLength
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
        required
        maxLength={maxLength}
      />
    </Wrapper>
  );
};

export default Labelinput;
