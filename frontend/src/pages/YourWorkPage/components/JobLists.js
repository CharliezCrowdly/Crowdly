import React from "react";
import { JobBox } from "../../../component";

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
