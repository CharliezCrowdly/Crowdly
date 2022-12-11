import React from "react";
import Filter from "./component/Filter";
import Applicant from "./component/Applicant";
import Wrapper from "./wrappers/ApplicantPage";
const ApplicantPage = () => {
  return (
    <Wrapper>
      <div className="left-container">
        <Filter />
      </div>
      <div className="right-container glassmorphism">
        {[...Array(8)].map((item,index) => (
          <Applicant key={index} />
        ))}
      </div>
    </Wrapper>
  );
};

export default ApplicantPage;
