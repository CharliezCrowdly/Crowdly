import React, { useState } from "react";
import Wrapper from "../wrappers/UserFilter";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const options = {
  drop: true,
  add: false,
};
const UserFilter = ({ statusfilter }) => {
  const [option, setOption] = useState(options);

  return (
    <Wrapper className={option.drop ? "glassmorphism active" : "glassmorphism"}>
      <div className="filter-header">
        <p>Status</p>
        <MdOutlineKeyboardArrowDown
          className={!option.drop ? "icon " : "icon active"}
          onClick={() => setOption({ ...option, drop: !option.drop })}
        />
      </div>

      <div className="checkbox">
        <input
          type="checkbox"
          name="Under-Review"
          id=""
          onClick={statusfilter}
        />
        <label htmlFor="">Under-Review</label>
      </div>

      <div className="checkbox">
        <input type="checkbox" name="Hired" id="" onClick={statusfilter} />
        <label htmlFor="">Hired</label>
      </div>
      <div className="checkbox">
        <input type="checkbox" name="Reject" id="" onClick={statusfilter} />
        <label htmlFor="">Rejected</label>
      </div>
    </Wrapper>
  );
};

export default UserFilter;
