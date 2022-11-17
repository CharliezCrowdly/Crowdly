import React from "react";
import { BiSearch } from "react-icons/bi";
import  DropdownInput  from "./DropdownInput";
import Wrapper from "../wrappers/SearchContainer";
import { useAppContext } from "../context/appContext";



const SearchContainer = () => {
    const {
      isLoading,
     
      searchType,
     
      jobTypeOptions,
      handleChange,
      clearFilters,
    } = useAppContext();


    const handleSearch = (e) => {
      if (isLoading) return;
      handleChange({ name: e.target.name, value: e.target.value });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      clearFilters();
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
              placeholder="Enter Job"
            />
          </div>
          <div className="sort-by">
            <DropdownInput
              labelText={"Sort"}
              name="searchType"
              value={searchType}
              handleChange={handleSearch}
              list={["all", ...jobTypeOptions]}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SearchContainer;
