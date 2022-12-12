import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import DropdownInput from "./DropdownInput";
import Wrapper from "../wrappers/SearchContainer";
import { useAppContext } from "../context/appContext";

const SearchContainer = ({ applyFilters, handleChange }) => {
  const {
    isLoading,

    searchType,

    jobTypeOptions,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <div className="search-container glassmorphism">
        <div className="heading6">Search</div>
        <div className="searchbox ">
          <div className="searchbar">
            <BiSearch className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Enter Job Title"
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className="sort-by">
            <button onClick={applyFilters}>Filter</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SearchContainer;
