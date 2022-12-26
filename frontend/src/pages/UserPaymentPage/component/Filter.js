import React from "react";
import SelectionOption from "./SelectionOption";
import UserFilter from "./UserFilter";
import RangeFilter from "./RangeFilter";
const Filter = ({search,handleChange,statusfilter,handleskill}) => {
  return (
    <div>
      <SelectionOption handleskill={handleskill} skills= {search.skills} />
      <UserFilter statusfilter={statusfilter}  />
      <RangeFilter bid ={search.wage} handleChange={handleChange} />
    </div>
  );
};

export default Filter;
