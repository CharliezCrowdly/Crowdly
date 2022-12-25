import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAppContext } from "../../../../context/appContext";
import JobBox from "../JobBox";

const JobHistory = () => {
  const { token } = useAppContext();
  const [jobs, setjobs] = useState([]);

  const getsavedjob = async () => {
    await axios
      .get(`/api/v1/job/appliedjobs`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setjobs(res.data.data);
        console.log(res);
      });
  };

  useEffect(() => {
    getsavedjob();
  }, []);
    if (jobs.length < 1) {
      return <h1>no jobs found</h1>;
    }
    return (
      <div>
        {jobs.map((item, index) => {
          return <JobBox job={item} key={index} />;
        })}
      </div>
    );
};

export default JobHistory;
