import React, { useEffect, useState, userRef, useRef } from "react";
import { FilterContent, SearchContainer } from "../../component";
import Wrapper from "./wrapper/YourWorkPage";
import JobLists from "./components/JobLists";

import axios from "axios";

// const options = {
//   method: "GET",
//   url: `https://city-api1.p.rapidapi.com/?city=ka`,
//   headers: {
//     "X-RapidAPI-Key": "aa33616910mshee3d47af2d60dd4p1205e1jsn042853a57c8a",
//     "X-RapidAPI-Host": "city-api1.p.rapidapi.com",
//   },
// };

// const result = axios.request(options).then((res) => console.log(res.data));
const YourWorkPage = () => {
  const [joblists, setJobs] = useState([]);
  const [filterjob, setfilterd] = useState([]);

  const [loading, setLoading] = useState(true);
  const load = useRef(true);
  const [search, setsearch] = useState({
    title: "",
    jobtype: [],
    experiencelvl: [],
    category: [],
    wage: "100",
  });

  const listfilter = (name, value) => {
    setsearch({ ...search, [name]: value });
  };

  const fetch = async () => {
    const token = localStorage.getItem("token");
    await axios
      .get(`/api/v1/job/getAllJobs/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setJobs(res.data.data);
        setfilterd(res.data.data);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (load.current === true) {
      fetch();
    }
    return () => (load.current = false);
  }, []);

  const applyFilters = () => {
    console.log("filter");
    var filterlist = joblists;

    if (search.title) {
      console.log("title");

      filterlist = filterlist.filter(
        (item) =>
          item.title.toLowerCase().search(search.title.toLowerCase().trim()) !=
          -1
      );
    }

    if (search.jobtype.length > 0) {
      console.log("jobtype");

      filterlist = filterlist.filter((item) => {
        search.jobtype.includes(item.jobtype);
      });
    }

    if (search.wage) {
      console.log(search.wage);
      filterlist = filterlist.filter(
        (item) => parseInt(item.sallary) <= parseInt(search.wage)
      );
    }
    setfilterd(filterlist);
  };

  const handleChange = (e) => {
    search.category
    
    setsearch({ ...search, [e.target.name]: e.target.value });
  };

  if (loading) {
    return <div></div>;
  }
  return (
    <Wrapper>
      <div className="YourWorkPage">
        <div className="middle-container">
          <SearchContainer
            applyFilters={applyFilters}
            handleChange={handleChange}
          />
          <JobLists
            joblists={filterjob}
            joblength={filterjob.length}
            search={search}
            applyFilters={applyFilters}
          />
        </div>

        <div className="right-container">
          <FilterContent handleChange={handleChange} listfilter={listfilter} />
        </div>
      </div>
    </Wrapper>
  );
};

export default YourWorkPage;
