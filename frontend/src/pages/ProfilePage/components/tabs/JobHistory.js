import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAppContext } from "../../../../context/appContext";
import JobBox2 from "../JobBox2";

const JobHistory = () => {
  const { token, profileUser } = useAppContext();
  const [jobs, setjobs] = useState([]);
  const getsavedjob = async () => {
    await axios
      .get(`/api/v1/job/getAppliedJobs`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setjobs(res.data.data.appliedJobs);
        console.log(res.data.data.appliedJobs);
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
        return <JobBox2 job={item} key={index} />;
      })}
    </div>
  );
};

export default JobHistory;
