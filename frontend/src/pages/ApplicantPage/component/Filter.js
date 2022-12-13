import React from "react";
import SelectionOption from "./SelectionOption";
import UserFilter from "./UserFilter";
import RangeFilter from "./RangeFilter";
const Filter = ({search,handleChange,statusfilter}) => {
  return (
    <div>
      <SelectionOption />
      <UserFilter statusfilter={statusfilter} />
      <RangeFilter bid ={search.wage} handleChange={handleChange} />
    </div>
  );
};

export default Filter;
