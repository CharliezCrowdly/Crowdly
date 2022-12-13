import React from "react";
import { Labelinput, SingleInput } from "../../../component/formcomponents";
import Wrapper from "../wrapper/Step1";

const Step1 = ({ handleChange, handleChange2, values }) => {
  const options = [
    {
      type: "IT",
      id: 1,
    },
    {
      type: "Education",
      id: 2,
    },
    {
      type: "Health",
      id: 3,
    },
    {
      type: "Entertainment",
      id: 4,
    },
    {
      type: "Real Estate",
      id: 5,
    },
    {
      type: "Others",
      id: 6,
    },
  ];

  const joblist = [
    {
      type: "FullTime",
      id: 1,
    },
    {
      type: "PartTime",
      id: 2,
    },
    {
      type: "FreeLance",
      id: 3,
    },
  ];

  const explist = [
    {
      type: "Entry Level",
      id: 1,
    },
    {
      type: "Interdimate",
      id: 2,
    },
    {
      type: "Expert",
      id: 3,
    },
  ];

  return (
    <Wrapper>
      <Labelinput
        label={"Full Name"}
        placeholder={"Enter Your Full Name"}
        name={"fullname"}
        handleChange={handleChange}
        value={values.fullname}
      />
      <SingleInput
        options={options}
        label={"Category"}
        placeholder={"Choose Desired Job Sector"}
        handleChange2={handleChange2}
        value={values.sector}
        name={"sector"}
        value2={values.sector}
      />
    </Wrapper>
  );
};

export default Step1;
