import React from "react";
import { useState } from "react";
import Wrapper from "../../wrappers/formwrappers/SingleInput";

const SingleInput = ({
  options,
  placeholder,
  label,
  value,
  name,
  handleChange2,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <label htmlFor="">{label}</label>
      <div className="input-field">
        <div
          className="singleselectinput"
          onClick={(e) => {
            setIsOpen((prev) => !prev);
          }}
          onBlur={() => {
            setIsOpen(false);
          }}
        >
          <span className="usertype">{value ? value : placeholder}</span>
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
                    handleChange2(name, item.type);
                    setIsOpen(false);
                  }}
                >
                  {item.type}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default SingleInput;
