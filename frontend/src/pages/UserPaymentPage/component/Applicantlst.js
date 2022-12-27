import React, { useState } from "react";
import Applicant from "./Applicant";
const Applicantlst = React.memo(({ applicants, changestatus, setrefresh }) => {
  console.log(applicants);
  return (
    <div className="applicants">
      {applicants.map((item, index) => (
        <Applicant
          key={index}
          trans={item}
          changestatus={() => changestatus(index)}
          setrefresh={setrefresh}
        />
      ))}
    </div>
  );
});

export default Applicantlst;
