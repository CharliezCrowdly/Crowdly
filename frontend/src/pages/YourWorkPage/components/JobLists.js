import React, { useEffect, useState } from "react";
import joblists from "../../../utils/joblist";
import { JobBox } from "../../../component";
import axios from "axios";

const JobLists = ({ joblists }) => {
  return (
    <div>
      {joblists.map((job) => {
        // const { id } = link;

        return <JobBox job={job} />;
      })}
    </div>
  );
};

export default JobLists;
