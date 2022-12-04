import React, { useState } from "react";
import Wrapper from "../wrappers/FilterContent";
import SelectOption from "./SelectionOption";

const FilterContent = ({
  handleChange,
  categoryfilter,
  clearcategory,
  jobtypefilter,
  clearjobtype,
  experiencelvlfilter,
  clearexperiencelvl,
  search,
}) => {
  const [range, setRange] = useState(0);

  const rangeChange = (e) => {
    setRange(e.target.value);
    handleChange(e);
  };
  return (
    <Wrapper>
      <div className="filter-content">
        <div className="job-filter glassmorphism">
          <h2 className="filter-name">Job Filter</h2>
          <button className="btn-clear">clear all</button>
        </div>

        <SelectOption
          categoryfilter={categoryfilter}
          clearcategory={clearcategory}
        />

        {/* skill level */}
        <div className="lvl glassmorphism">
          <div className="lvlheader">
            <span className="heading4">Experience level</span>
            <button className="btn-clear" onClick={clearexperiencelvl}>
              clear all
            </button>
          </div>
          <div className="lvlboxes">
            <div className="box">
              <input
                type="checkbox"
                name="Entry level"
                id=""
                onClick={() => experiencelvlfilter("Entry Level")}
              />
              <span className="label-content">Entry Level</span>
            </div>
            <div className="box">
              <input
                type="checkbox"
                name="Interdimate"
                id=""
                onClick={() => experiencelvlfilter("Interdimate")}
              />
              <span className="label-content">Interdimate</span>
            </div>
            <div className="box">
              <input
                type="checkbox"
                name="Expert"
                id=""
                onClick={() => experiencelvlfilter("Expert")}
              />
              <span className="label-content">Expert</span>
            </div>
          </div>
        </div>

        {/* joblocation */}

        <div className="slide-range glassmorphism">
          <h4>Minimum wage</h4>
          <div className="range-container">
            <span>$ {range} </span>

            <input
              type="range"
              name="wage"
              id="vol"
              min="0"
              max="100000"
              className="range"
              onChange={rangeChange}
            />
          </div>
        </div>

        {/* jobtype */}
        <div className="jobtype glassmorphism">
          <div className="jobtypeheader">
            <span className="heading4">Job Type</span>
            <button className="btn-clear" onClick={clearjobtype}>
              clear all
            </button>
          </div>
          <div className="jobtypeboxes">
            <div className="box">
              <input
                type="checkbox"
                name="FullTime"
                id=""
                onClick={() => jobtypefilter("FullTime")}
              />
              <span className="label-content">FullTime</span>
            </div>
            <div className="box">
              <input
                type="checkbox"
                name="Freelance"
                id=""
                onClick={() => jobtypefilter("Freelance")}
              />
              <span className="label-content">Freelance</span>
            </div>
            <div className="box">
              <input
                type="checkbox"
                name="PartTime"
                id=""
                onClick={() => jobtypefilter("PartTime")}
              />
              <span className="label-content">PartTime</span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default FilterContent;
