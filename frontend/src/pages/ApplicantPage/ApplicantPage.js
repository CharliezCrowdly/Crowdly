import React, { useState, useEffect } from "react";
import Filter from "./component/Filter";
import Applicant from "./component/Applicant";
import Wrapper from "./wrappers/ApplicantPage";
import { useAppContext } from "../../context/appContext";
import axios from "axios";
import SearechFilter from "./component/SearechFilter";
import Applicantlst from "./component/Applicantlst";
const ApplicantPage = () => {
  const { token } = useAppContext();
  const [applicants, setApplicants] = useState([]);
  const [search, setsearch] = useState({
    title: "",
    jobtype: [],
    experiencelvl: [],
    category: [],
    wage: "0",
  });
  const [applicantslst, setApplicantslst] = useState([]);

  const handleChange = (e) => {
    setsearch({ ...search, [e.target.name]: e.target.value });
  };

  const fetch = async () => {
    await axios
      .get(
        `http://localhost:5000/api/v1/job/getApplicants/${"639332c29bfdb09ea78d679e"}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        {
          params: {
            id: "639332c29bfdb09ea78d679e",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setApplicants(res.data.data.applicants);
        setApplicantslst(res.data.data.applicants);
      });
  };

  useEffect(() => {
    fetch();
  }, []);

  const applyFilters = () => {
    var filterlist = applicantslst;

    if (search.title) {
      console.log("title");

      filterlist = filterlist.filter(
        (item) =>
          item.applicant.name
            .toLowerCase()
            .search(search.title.toLowerCase().trim()) != -1
      );
    }

    if (search.wage) {
      filterlist = filterlist.filter(
        (item) => parseInt(item.bid) <= parseInt(search.wage)
      );
    }
    setApplicants(filterlist);
  };

  return (
    <Wrapper>
      <div className="left-container">
        <Filter handleChange={handleChange} search={search} />
      </div>
      <div className="right-container glassmorphism">
        <SearechFilter filter={applyFilters} handleChange={handleChange} />
        <Applicantlst applicants={applicants} />
      </div>
    </Wrapper>
  );
};

export default ApplicantPage;
