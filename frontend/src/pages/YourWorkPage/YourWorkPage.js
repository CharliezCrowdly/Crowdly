import React, { useEffect, useState, useRef } from "react";
import { FilterContent, SearchContainer } from "../../component";
import Wrapper from "./wrapper/YourWorkPage";
import JobLists from "./components/JobLists";

import axios from "axios";
import { useAppContext } from "../../context/appContext";

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
  const { user } = useAppContext();
  const [search, setsearch] = useState({
    title: "",
    jobtype: [],
    experiencelvl: [],
    category: [],
    wage: "",
  });

  const categoryfilter = (name) => {
    var newsearch = search.category;
    if (newsearch.includes(name)) {
      newsearch = newsearch.filter((item) => item !== name);
    } else {
      newsearch.push(name);
    }

    setsearch({ ...search, category: newsearch });
  };

  const clearcategory = () => {
    setsearch({ ...search, category: [] });
  };

  const jobtypefilter = (name) => {
    var newsearch = search.jobtype;
    if (newsearch.includes(name)) {
      newsearch = newsearch.filter((item) => item !== name);
    } else {
      newsearch.push(name);
    }

    setsearch({ ...search, jobtype: newsearch });
  };

  const clearjobtype = () => {
    setsearch({ ...search, jobtype: [] });
  };

  const experiencelvlfilter = (name) => {
    var newsearch = search.experiencelvl;
    if (newsearch.includes(name)) {
      newsearch = newsearch.filter((item) => item !== name);
    } else {
      newsearch.push(name);
    }

    setsearch({ ...search, experiencelvl: newsearch });
  };

  const clearexperiencelvl = () => {
    setsearch({ ...search, experiencelvl: [] });
  };

  const fetch = async () => {
    const token = localStorage.getItem("token");
    if (user.usertype == "individual") {
      await axios
        .get(`http://localhost:5000/api/v1/job/getAllJobs/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setJobs(res.data.data);
          setfilterd(res.data.data);
          setLoading(false);
        });
    } else {
      await axios
        .get(`http://localhost:5000/api/v1/job/getCompanyJob`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setJobs(res.data.data);
          setfilterd(res.data.data);
          setLoading(false);
          console.log(res.data.data);
        });
    }
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
      filterlist = filterlist.filter((item) => {
        return search.jobtype.includes(item.jobtype);
      });
    }

    if (search.category.length > 0) {
      console.log("cate");

      filterlist = filterlist.filter((item) => {
        return search.category.includes(item.sector);
      });
    }

    if (search.experiencelvl.length > 0) {
      filterlist = filterlist.filter((item) => {
        return search.experiencelvl.includes(item.experiencelvl);
      });
    }

    if (search.wage) {
      console.log(search.wage);
      filterlist = filterlist.filter(
        (item) => parseInt(item.sallary) >= parseInt(search.wage)
      );
    }
    setfilterd(filterlist);
  };

  const handleChange = (e) => {
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
          <FilterContent
            handleChange={handleChange}
            categoryfilter={categoryfilter}
            clearcategory={clearcategory}
            jobtypefilter={jobtypefilter}
            clearjobtype={clearjobtype}
            experiencelvlfilter={experiencelvlfilter}
            clearexperiencelvl={clearexperiencelvl}
            search={search}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default YourWorkPage;
