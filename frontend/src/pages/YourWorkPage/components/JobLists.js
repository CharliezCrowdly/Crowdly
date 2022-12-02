import React, { useEffect, useState } from "react";
import joblists from "../../../utils/joblist";
import { JobBox } from "../../../component";
import axios from "axios";

const JobLists = React.memo(({ joblists, joblength, applyFilters, search }) => {
  

  return (
    <div>
      {joblists.map((job, index) => {
        // const { id } = link;

        return <JobBox job={job} key={index} />;
      })}
    </div>
  );
});

export default JobLists;
