import React from "react";
import { useState } from "react";
import Wrapper from "../../wrappers/formwrappers/SingleSelectInput";

const options = [
  {
    type: "individual",
    id: 234234,
  },
  {
    type: "company",
    id: 2222,
  },
];
const SingleSelectInput = ({setUser}) => {
  const [value, setValue] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <div
        className="singleselectinput"
        onClick={(e) => {
          setIsOpen((prev) => !prev);
        }}
        onBlur={() => {
          setIsOpen(false);
        }}
      >
        <span className="usertype">{value ?? "Choose User Type"}</span>
        <div className="caret"></div>
        
        <div className="divider"></div>


        <ul className={isOpen ? "options" : "d-none"}>
          {options.map((item) => {
            return (
              <li
              className="option"
                key={item.id}
                onClick={(e) => {
                  e.stopPropagation();
                  setValue(item.type);
                  setUser(item.type);
                  setIsOpen(false);
                }}
              >
                {item.type}
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

export default SingleSelectInput;
