import React, { useState } from "react";
import Applicant from "./Applicant";
const Applicantlst = React.memo(({ applicants, changestatus, setrefresh }) => {
  return (
    <div className="applicants">
      {applicants.map((item, index) => (
        <Applicant
          key={index}
          item={item}
          changestatus={() => changestatus(index)}
          setrefresh={setrefresh}
        />
      ))}
    </div>
  );
});

export default Applicantlst;
