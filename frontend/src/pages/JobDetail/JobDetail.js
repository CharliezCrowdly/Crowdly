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
import { useNavigate } from "react-router-dom";
import { IoTime } from "react-icons/io5";
import Countdown from "react-countdown";
import StripeContainer from "../../component/StripeContainer";
import { Alert } from "../../component";

const JobDetail = () => {
  const [payment, setPayment] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [showPayment, setShowPayment] = useState(false);
  const { requirement, company } = joblists;
  const [isReadmore, setReadmore] = useState(false);
  const [save, setSave] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [ismodal, setModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [job, setJob] = useState("");
  const { token, showalert } = useAppContext();
  const [owner, setOwner] = useState(false);
  const [applicants, setApplicants] = useState([]);
  const [applicantsLoading, setApplicantsLoading] = useState(true);
  const { user, savejob, unsavejob } = useAppContext();
  const [bookmarked, Setbookmark] = useState(false);
  const [applied, setApplied] = useState(false);
  const [status, setStatus] = useState("");
  const [isHired, setIsHired] = useState(false);
  const [hired, setHired] = useState(null);
  const [myDetails, setMyDetails] = useState(null);

  const navigate = useNavigate();
  const fetch = async () => {
    const id = window.location.pathname.split("/")[3];

    await axios
      .get(`http://localhost:5000/api/v1/job/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setMyDetails(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });

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

    await axios
      .get(
        `http://localhost:5000/api/v1/job/hired/${id}`,
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
      .then(async (res) => {
        if (res.data.applicant.length > 0) {
          setIsHired(true);
          setHired(res.data.applicant[0]);
          console.log(res.data.applicant[0]);

          await axios
            .get(
              `http://localhost:5000/api/v1/job/getPayment/${id}`,
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
              console.log(res.data.data);
              if (res.data.data.length == 0) {
                setPayment(true);
                setPaymentStatus("Not Paid");
              } else {
                setPaymentStatus(res.data.data[0].status);
              }
            });
        }
      });
  }; //getPayment

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
    //Check if the user has adder payment details
    if (myDetails.isCardSet) {
      setModal((ismodal) => !ismodal);
    } else {
      showalert({
        alertType: "success",
        alertText: "Please Complete your payment details \n to place your bid!",
      });
    }
  };

  if (loading) {
    return <div></div>;
  }

  const handleShowPayment = () => {
    setShowPayment(true);
  };

  return (
    <>
      <Wrapper className="">
        <SubmitProporsal ismodal={ismodal} onbid={onbid} />
        <div className="left-section glassmorphism">
          <section className="one">
            <Alert />

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
                Status:<p> {status.status}</p> <br />
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
            <div className="responsiblity">
              <h3>Responsiblity</h3>
              {loading
                ? requirement.map((item) => {
                    return <li key={item.id}>{item.content}</li>;
                  })
                : job.requirements.map((item, index) => {
                    return <li key={index}>{item.requirement}</li>;
                  })}
            </div>
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
            <div className="skills">
              <h3>Skills Required</h3>
              <div className="skill">
                {loading
                  ? requirement.map((item, index) => {
                      return <li key={index}>{item.content}</li>;
                    })
                  : job.skills.map((item, index) => {
                      return <li key={index}>{item.skill}</li>;
                    })}
              </div>
            </div>
          </section>

          <div className="three">
            <h3>About Company</h3>
            <div className="info-container">
              <img
                src={job.company.profilePicture}
                alt=""
                className="company-pic"
              />
              <div className="info">
                <span className="username">{job.company.username}</span>
                <span className="followercount">
                  {job.company.followers.length} followers
                </span>
              </div>
              <button
                className="btn-follow"
                onClick={() => navigate(`/user/profile/${job.company._id}`)}
              >
                View Profile
              </button>
            </div>
            <div className="company-employee"></div>
            <div className="description">
              {job.company.description?.substring(0, isReadmore ? 600 : 200)}
              {job.company.description?.split(" ").length > 20 ? (
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
          {owner ? (
            payment ? (
              <button
                className={`btn-easy ${showPayment ? "hideNow" : ""}`}
                onClick={handleShowPayment}
              >
                Complete Payment
              </button>
            ) : (
              <>Payment Status: {paymentStatus}</>
            )
          ) : (
            <div></div>
          )}
          {showPayment && (
            <StripeContainer
              paymentTo={hired.applicant._id}
              amount={hired.bid}
              jobId={job._id}
            />
          )}
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
