import React, { useState } from "react";
import Wrapper from "../wrappers/SelectionOption";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const SelectionOption = ({handleskill,skills}) => {
  const options = {
    drop: true,
    add: false,
  };
  const [value, setValue] = useState([]);
  const [option, setOption] = useState(options);
  const onEnter = (e) => {
    if (e.key === "Enter") {
   

      var newskills = skills;
      newskills.push(e.target.value.toLowerCase());
      handleskill([...newskills])
      e.target.value = "";

    }
  };
  return (
    <Wrapper className={option.drop ? "glassmorphism active" : "glassmorphism"}>
      <div className="filter-header">
        <p>Skills</p>
        <MdOutlineKeyboardArrowDown
          className={!option.drop ? "icon " : "icon active"}
          onClick={() => setOption({ ...option, drop: !option.drop })}
        />
      </div>
      <input
        className="enterskill"
        type="text"
        onKeyDown={onEnter}
        placeholder="Enter skills"
      />
      <div className="list">
        {skills.map((item, index) => {
          return (
            <button key={index}>
              {item}
              <span>X</span>
            </button>
          );
        })}
      </div>
      <button className="add-skill" onClick={()=> handleskill([])}>
        <span>x</span> clear all
      </button>
    </Wrapper>
  );
};

export default SelectionOption;
