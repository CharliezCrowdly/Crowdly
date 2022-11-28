import React, { useState, useEffect } from "react";
import Wrapper from "../wrapper/searchBar";
import { useAppContext } from "../../../context/appContext";
import { FaSearch } from "react-icons/fa";
import { useRef } from "react";
import { Link, useAsyncError } from "react-router-dom";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const { searchProfile, searchList, user, token } = useAppContext();
  const [slst, setlst] = useState([]);
  const showSearch = useRef(false);

  useEffect(() => {
    if (search) {
      showSearch.current = true;

      const timoutId = setTimeout(() => {
        searchProfile(`search?username=${search}`);
      }, 1000);

      return () => clearTimeout(timoutId);
    } else {
    }
    return () => (showSearch.current = false);
  }, [search]);

  const onChange = (e) => {
    setSearch(e.target.value.toLowerCase().replace(/ /g, ""));
  };
  return (
    <Wrapper>
      <div className="search-container glassmorphism">
        <span>
          <FaSearch />
        </span>
        <input
          type="search"
          placeholder="Search User"
          className="searchbar"
          onChange={onChange}
        />
        <button className="btn-post">search</button>
      </div>

      <div
        className={
           search.length > 0  ? "search_result" : "d-none"
        }
      >
        {searchList.map((item, index) => {
          return (
            <Link
              to={`/user/profile/${item._id}`}
              key={item._id}
              className={user._id != item._id ? "users" : "d-none"}
            >
              <div className="search-content">
                <img
                  src={item.profilePicture}
                  alt=""
                  className="profile-pic-sm"
                />
                <div className="search-info">
                  <div className="username">{item.username}</div>
                  <div className="name">{item.name}</div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default SearchBar;
