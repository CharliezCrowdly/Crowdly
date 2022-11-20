import React from "react";
import Wrapper from "../wrapper/PostInput";

const PostInput = ({ type, placeholder, value, name, handleChange }) => {
  return (
    <Wrapper>
      <label htmlFor="">{name}</label>
      <input
        type={type}
        name={name}
        placeholder="Enter Description"
        value={value}
        onChange={handleChange}
      />
    </Wrapper>
  );
};

export default PostInput;
