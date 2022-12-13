import React from "react";
import SelectionOption from "./SelectionOption";
import UserFilter from "./UserFilter";
import RangeFilter from "./RangeFilter";
import SearechFilter from "./SearechFilter";
const Filter = () => {
  return (
    <div>
      <SearechFilter/>
      <SelectionOption />
      <UserFilter />
      <RangeFilter />
    </div>
  );
};

export default Filter;
