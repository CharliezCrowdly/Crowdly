import React from "react";
import Applicant from "./Applicant";
const Applicantlst = React.memo(({ applicants }) => {
  return (
    <div>
      {applicants.map((item, index) => (
        <Applicant key={index} item={item} />
      ))}
    </div>
  );
});

export default Applicantlst;
