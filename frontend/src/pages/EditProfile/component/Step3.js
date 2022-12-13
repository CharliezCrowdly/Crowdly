import React from "react";
import { Labelinput } from "../../../component/formcomponents";
import Wrapper from "../wrapper/Step3";
const Step3 = ({ handleChange, values }) => {
  return (
    <Wrapper>
      <label htmlFor="">Description</label>
      <textarea
        id=""
        cols="30"
        rows="10"
        placeholder="Please Describe Yourself"
        name={"description"}
        onChange={handleChange}
        value={values.description}
      ></textarea>
    </Wrapper>
  );
};

export default Step3;
