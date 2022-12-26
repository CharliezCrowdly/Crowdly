import React from "react";
import Applicant from "./Applicant";
const Applicantlst = React.memo(({ applicants,changestatus }) => {
  return (
    <div className="applicants">
      {applicants.map((item, index) => (
        <Applicant key={index} item={item} changestatus={()=> changestatus(index)} />
      ))}
    </div>
  );
});

export default Applicantlst;
