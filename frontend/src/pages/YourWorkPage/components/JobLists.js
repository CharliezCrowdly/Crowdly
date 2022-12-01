import React, { useEffect, useState } from "react";
import joblists from "../../../utils/joblist";
import { JobBox } from "../../../component";
import axios from "axios";

const JobLists = () => {
  const [jobs, setJobs] = useState("");
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

  return (
    <div>
      {loading ? (
        //loader
        <div className="loader"></div>
      ) : (
        jobs.map((job) => {
          // const { id } = link;

          return <JobBox job={job} />;
        })
      )}
    </div>
  );
};

export default JobLists;


