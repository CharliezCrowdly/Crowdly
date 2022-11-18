import React from "react";
import Wrapper from "../wrappers/FilterContent";
import { BiSearch } from "react-icons/bi";
import SelectOption from "./SelectionOption"

const FilterContent = () => {
  return (
    <Wrapper>
      <div className="filter-content">
        <div className="job-filter glassmorphism">
          <h2 className="filter-name">Job Filter</h2>
          <button className="btn-clear">clear all</button>
        </div>

        <SelectOption />

        {/* skill level */}
        <div className="lvl glassmorphism">
          <div className="lvlheader">
            <span className="heading4">Experience level</span>
            <button className="btn-clear">clear all</button>
          </div>
          <div className="lvlboxes">
            <div className="box">
              <input type="checkbox" name="Entry level" id="" />
              <span className="label-content">Entry Level</span>
            </div>
            <div className="box">
              <input type="checkbox" name="Interdimate" id="" />
              <span className="label-content">Interdimate</span>
            </div>
            <div className="box">
              <input type="checkbox" name="Expert" id="" />
              <span className="label-content">Expert</span>
            </div>
          </div>
        </div>

        {/* joblocation */}

        {/* jobtype */}
        <div className="jobtype glassmorphism">
          <div className="jobtypeheader">
            <span className="heading4">Job Type</span>
            <button className="btn-clear">clear all</button>
          </div>
          <div className="jobtypeboxes">
            <div className="box">
              <input type="checkbox" name="FullTime" id="" />
              <span className="label-content">FullTime</span>
            </div>
            <div className="box">
              <input type="checkbox" name="Freelance" id="" />
              <span className="label-content">Freelance</span>
            </div>
            <div className="box">
              <input type="checkbox" name="PartTime" id="" />
              <span className="label-content">PartTime</span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default FilterContent;
