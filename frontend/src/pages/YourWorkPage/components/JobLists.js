import React from 'react'
import joblists from '../../../utils/joblist'
import {JobBox} from '../../../component';

const JobLists = () => {
  return (
    <div>
      {joblists.map((link) => {
        const {  id } = link;

        return (
            <JobBox key={id}/>
          
        );
      })}
    </div>
  );
}

export default JobLists