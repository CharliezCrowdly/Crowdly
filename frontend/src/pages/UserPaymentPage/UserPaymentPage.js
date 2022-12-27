import React, { useState, useEffect } from "react";
import Filter from "./component/Filter";
import Applicant from "./component/Applicant";
import Wrapper from "./wrappers/ApplicantPage";
import { useAppContext } from "../../context/appContext";
import axios from "axios";
import SearechFilter from "./component/SearechFilter";
import Applicantlst from "./component/Applicantlst";
import { useParams } from "react-router-dom";
const UserPaymentPage = () => {
  const [refresh, setrefresh] = useState(1);
  const { token } = useAppContext();
  const [applicants, setApplicants] = useState([]);
  const [search, setsearch] = useState({
    title: "",
    jobtype: [],
    experiencelvl: [],
    status: [],
    wage: "0",
    skills: [],
  });
  const [applicantslst, setApplicantslst] = useState([]);

  const handleChange = (e) => {
    setsearch({ ...search, [e.target.name]: e.target.value });
  };

  const handleskill = (value) => {
    setsearch({ ...search, skills: value });
  };

  const getAllPayment = async () => {
    const response = await axios.get(
      "http://localhost:5000/api/v1/job/payments",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setApplicants(response.data.payments);
  };

  useEffect(() => {
    getAllPayment();
  }, []);

  const changestatus = (index) => {
    let newapplicant = applicantslst;
    //change status of all applicants to rejected
    newapplicant.forEach((item) => (item.status = "Rejected"));
    console.log(newapplicant);
    newapplicant[index].status = "Hired";
    setApplicantslst(newapplicant);
    setApplicants(newapplicant);
  };

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

    if (search.wage && search.wage > 0) {
      filterlist = filterlist.filter(
        (item) => parseInt(item.bid) <= parseInt(search.wage)
      );
    }

    if (search.status.length > 0) {
      filterlist = filterlist.filter((item) => {
        return search.status.includes(item.status);
      });
    }

    if (search.skills.length > 0) {
      console.log("hello");
      filterlist = filterlist.filter((item) => {
        return item.applicant.skillSet.some((item) => {
          return search.skills.includes(item.skill.toLowerCase());
        });
      });
    }
    setApplicants(filterlist);
  };

  return (
    <Wrapper>
      <div className="left-container">
        <Filter
          handleChange={handleChange}
          handleskill={handleskill}
          search={search}
          statusfilter={statusfilter}
        />
      </div>
      <div className="right-container glassmorphism">
        <SearechFilter filter={applyFilters} handleChange={handleChange} />
        <Applicantlst
          applicants={applicants}
          changestatus={changestatus}
          setrefresh={setrefresh}
        />
      </div>
    </Wrapper>
  );
};

export default UserPaymentPage;
