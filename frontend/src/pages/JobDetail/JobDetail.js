import React, { useEffect, useState } from "react";
import { FaBriefcase } from "react-icons/fa";
import { BiBuilding } from "react-icons/bi";
import SubmitProporsal from "./component/SubmitProposal";
import Wrapper from "./wrappers/JobDetail";
import joblists from "../../utils/job";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BsBookmarkFill, BsThreeDots } from "react-icons/bs";
import { AiTwotoneEdit, AiTwotoneDelete } from "react-icons/ai";
import Todo from "./component/Todo";
import { Recommendationlst } from "../../component";
import axios from "axios";
import { useAppContext } from "../../context/appContext";
import Table from "react-bootstrap/Table";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { IoTime } from "react-icons/io5";
import Countdown from "react-countdown";
const JobDetail = () => {
  const { requirement, company } = joblists;
  const [isReadmore, setReadmore] = useState(false);
  const [save, setSave] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [ismodal, setModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [job, setJob] = useState("");
  const { token } = useAppContext();
  const [owner, setOwner] = useState(false);
  const [applicants, setApplicants] = useState([]);
  const [applicantsLoading, setApplicantsLoading] = useState(true);
  const { user, savejob, unsavejob } = useAppContext();
  const [bookmarked, Setbookmark] = useState(false);
  const [applied, setApplied] = useState(false);
  const [status, setStatus] = useState("");
  //get job id from params and fetch job detail

  const navigate = useNavigate();
  const fetch = async () => {
    const id = window.location.pathname.split("/")[3];

    await axios
      .get(
        `http://localhost:5000/api/v1/job/getJob/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        {
          params: {
            id: id,
          },
        }
      )
      .then((res) => {
        setJob(res.data.data);
        setLoading(false);
        setOwner(res.data.data.company._id == user._id);

        if (res.data.data.saved.find((like) => like === user._id)) {
          Setbookmark(true);
          // postState.bookmarked= true
        } else {
          // postState.bookmarked = false
          Setbookmark(false);
        }
      });

    await axios
      .get(
        `http://localhost:5000/api/v1/job/getApplicants/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        {
          params: {
            id: id,
          },
        }
      )
      .then((res) => {
        setApplicants(res.data.data.applicants);
        setApplicantsLoading(false);

        res.data.data.applicants.find((applicant) => {
          if (applicant.applicant._id === user._id) {
            setApplied(true);
            setStatus(applicant);
          }
        });
      });
  };

  useEffect(() => {
    fetch();
  }, [user._id]);
  const togglesave = (e, jobid) => {
    e.preventDefault();

    if (bookmarked) {
      unsavejob(jobid);
      Setbookmark(false);
    } else {
      savejob(jobid);
      Setbookmark(true);
    }
  };

  const onsave = () => {
    if (save) {
      setSave(false);
    } else {
      setSave(true);
    }
  };

  const onbid = () => {
    setModal((ismodal) => !ismodal);
  };

  if (loading) {
    return <div></div>;
  }

  return (
    <>
      <Wrapper className="">
        <SubmitProporsal ismodal={ismodal} onbid={onbid} />
        <div className="left-section glassmorphism">
          <section className="one">
            <div className="title">
              <h1>{job.title}</h1>

              {owner ? (
                <div className="dropdown">
                  <BsThreeDots
                    onClick={() => setDropdown((dropdown) => !dropdown)}
                    className="icon"
                  />
                  <div
                    className={
                      dropdown ? "dropdown-option glassmorphism " : "d-none"
                    }
                  >
                    <div
                      className="deactivate"
                      onClick={() => navigate(`/user/edit/job/${job._id}`)}
                    >
                      <AiTwotoneEdit className="icon" />
                      <span>Edit Job</span>
                    </div>

                    <div className="deactivate">
                      <AiTwotoneDelete />
                      <span>Deactivate Job</span>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
            {/* <div className="place">
              <span className="location">Nepal,kathmandu</span>
              <span>8 hours ago</span>
            </div> */}
            <div className="jobtype">
              <FaBriefcase className="icon" />
              <span>{job.jobtype}</span>
            </div>
            <div className="jobtype">
              <IoTime className="icon" />

              <span>
                <Countdown date={job.closeDate} />
              </span>
            </div>
            <div className="jobtype">
              <RiMoneyDollarCircleLine className="icon" />
              {loading ? (
                <span>Rs. 50000 - 100000</span>
              ) : (
                <span>Rs. {job.sallary}</span>
              )}
            </div>
            {/* {owner ? (
              <div>
                <hr />
              </div>
            ) : (
              <div className="recommend">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                  alt=""
                  className="profile-pic-sm"
                />
                <span>Your profile match this job</span>
              </div>
            )} */}
            {owner ? (
              <div className="buttons">
                <button
                  className="btn-easy"
                  style={{ width: "auto" }}
                  onClick={() => navigate(`/user/applicants/${job._id}`)}
                >
                  View Applicants
                </button>
                <button
                  className="btn-save"
                  onClick={(e) => togglesave(e, job._id)}
                >
                  {!bookmarked ? (
                    "Save"
                  ) : (
                    <span className="bookmark">
                      Saved <BsBookmarkFill className="icon" />
                    </span>
                  )}
                </button>
              </div>
            ) : (
              <div className="buttons">
                {applied ? (
                  <button className="btn-easy" disabled>
                    Applied
                  </button>
                ) : (
                  <button className="btn-easy" onClick={onbid}>
                    Bid
                  </button>
                )}

                <button className="btn-save" onClick={onsave}>
                  {save ? (
                    "Save"
                  ) : (
                    <span className="bookmark">
                      Saved <BsBookmarkFill className="icon" />
                    </span>
                  )}
                </button>
              </div>
            )}

            {applied ? (
              <p className="status">
                Status:<span> {status.status}</span> <br />
                <br />
              </p>
            ) : null}
          </section>

          <section className="two">
            {loading ? (
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis doloremque fugiat, qui fugit ab accusamus, nobis
                tempora hic asperiores sit ad quisquam!s
              </p>
            ) : (
              <p className="description">{job.description}</p>
            )}
            {/* <div className="responsiblity">
              <h3>Responsiblity</h3>
              {loading
                ? requirement.map((item) => {
                    return <li key={item.id}>{item.content}</li>;
                  })
                : job.requirements.map((item, index) => {
                    return <li key={index}>{item.requirement}</li>;
                  })}
            </div> */}
            <div className="responsiblity">
              <h3>Requirement</h3>
              {loading
                ? requirement.map((item, index) => {
                    return <li key={index}>{item.requirement}</li>;
                  })
                : job.responsibilities.map((item, index) => {
                    return <li key={index}>{item.responsibility}</li>;
                  })}
            </div>
            <div className="responsiblity">
              <h3>Skills Required</h3>
              {loading
                ? requirement.map((item, index) => {
                    return <li key={index}>{item.content}</li>;
                  })
                : job.skills.map((item, index) => {
                    return <li key={index}>{item.skill}</li>;
                  })}
            </div>
          </section>
          {/* {owner ? (
            <div>
              <br />
              <hr />
              <br />
              <h2>Applicants</h2>
              <br />

              <Table striped style={{ width: "100%" }}>
                <thead>
                  <tr>
                    <th>S.N.</th>
                    <th>Name</th>
                    <th>Bid</th>
                    <th>Proposal</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {applicantsLoading ? (
                    <tr>
                      <td>Loading...</td>
                    </tr>
                  ) : (
                    applicants.map((item, index) => {
                      let proposal = item.proposal;
                      proposal = decodeURI(proposal);
                      proposal = "http://localhost:5000/" + proposal;
                      return (
                        <tr key={item._id} style={{ textAlign: "center" }}>
                          <td>{index + 1}</td>
                          <td>{item.applicant.name}</td>
                          <td>{item.bid}</td>
                          <td>
                            <a href={proposal}>Proposal</a>
                          </td>
                          <td>
                            <button className="btn-easy">Hire</button>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </Table>
            </div>
          ) : (
            <div className="three">
              <h3>About Company</h3>
              <div className="info-container">
                <img
                  src={company.profilepicture}
                  alt=""
                  className="company-pic"
                />
                <div className="info">
                  <span className="username">{company.username}</span>
                  <span className="followercount">
                    {company.followers.length} followers
                  </span>
                </div>
                <button className="btn-follow">+ follow</button>
              </div>
              <div className="company-employee">
                IT Developer <span>.</span> <span>11 - 15 employees</span>
              </div>
              <div className="description">
                {company.description.substring(0, isReadmore ? 600 : 200)}
                {company.description.split(" ").length > 20 ? (
                  <div className={isReadmore ? "btn-box" : "btn-container"}>
                    <button
                      className={isReadmore ? "readmore " : "readmore active"}
                      onClick={() => setReadmore((isReadmore) => !isReadmore)}
                    >
                      {isReadmore ? "Readless" : "Readmore"}
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          )} */}
        </div>
        <div className="right-section ">
          <Recommendationlst />
          <Todo />
        </div>
      </Wrapper>
      {/* <ToastContainer autoClose={500} /> */}
    </>
  );
};

export default JobDetail;
