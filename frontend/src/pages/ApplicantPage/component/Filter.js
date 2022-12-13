import React from "react";
import SelectionOption from "./SelectionOption";
import UserFilter from "./UserFilter";
import RangeFilter from "./RangeFilter";
const Filter = ({search,handleChange}) => {
  return (
    <div>
      <SelectionOption />
      <UserFilter />
      <RangeFilter bid ={search.wage} handleChange={handleChange} />
    </div>
  );
};

export default Filter;
