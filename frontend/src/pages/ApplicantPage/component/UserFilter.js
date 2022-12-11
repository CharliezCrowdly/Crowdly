import React, { useState } from "react";
import Wrapper from "../wrappers/UserFilter";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const options = {
  drop: true,
  add: false,
};
const UserFilter = () => {
  const [option, setOption] = useState(options);

  return (
    <Wrapper className={option.drop ? "glassmorphism active" : "glassmorphism"}>
      <div className="filter-header">
        <p>user type</p>
        <MdOutlineKeyboardArrowDown
          className={!option.drop ? "icon " : "icon active"}
          onClick={() => setOption({ ...option, drop: !option.drop })}
        />
      </div>

      <div className="checkbox">
        <input type="checkbox" name="" id="" />
        <label htmlFor="">pending</label>
      </div>

      <div className="checkbox">
        <input type="checkbox" name="" id="" />
        <label htmlFor="">approved</label>
      </div>
      <div className="checkbox">
        <input type="checkbox" name="" id="" />
        <label htmlFor="">pinned</label>
      </div>
    </Wrapper>
  );
};

export default UserFilter;
