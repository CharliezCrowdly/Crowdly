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
    status: [],
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

  const statusfilter = (e) => {
    var newsearch = search.status;
    if (newsearch.includes(e.target.name)) {
      newsearch = newsearch.filter((item) => item !== e.target.name);
    } else {
      newsearch.push(e.target.name);
    }

    setsearch({ ...search, status: newsearch });
  };

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

    if (search.status.length > 0) {
      filterlist = filterlist.filter((item) => {
        return search.status.includes(item.status);
      });
    }
    setApplicants(filterlist);
  };

  return (
    <Wrapper>
      <div className="left-container">
        <Filter handleChange={handleChange} search={search} statusfilter ={statusfilter} />
      </div>
      <div className="right-container glassmorphism">
        <SearechFilter filter={applyFilters} handleChange={handleChange} />
        <Applicantlst applicants={applicants} />
      </div>
    </Wrapper>
  );
};

export default ApplicantPage;
