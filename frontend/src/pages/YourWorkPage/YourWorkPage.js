import React ,{ useEffect, useState } from "react";
import { FilterContent, SearchContainer, } from "../../component";
import Wrapper from "./wrapper/YourWorkPage";
import JobLists from "./components/JobLists"

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
  const [joblists, setJobs] = useState("");
  const [loading, setLoading] = useState(true);
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
        setLoading(false);
      });
  };

  useEffect(() => {
    fetch();
  }, []);

  if(loading){
    return <div></div>
  }
  return (
    <Wrapper>
      <div className="YourWorkPage">
        <div className="middle-container">
          <SearchContainer  />
          <JobLists joblists = {joblists} />
        </div>

        <div className="right-container">
          <FilterContent />
        </div>
      </div>
    </Wrapper>
  );
};

export default YourWorkPage;
