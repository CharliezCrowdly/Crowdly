import React, { useEffect, useState } from "react";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import Wrapper from "../../../wrappers/JobBox";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../../context/appContext";
import Countdown from "react-countdown";
import { IoTime } from "react-icons/io5";

const JobBox = (job) => {
  const navigate = useNavigate();
  const { user, savejob, unsavejob } = useAppContext();
  const [bookmarked, Setbookmark] = useState(false);
  useEffect(() => {
    if (job.job.saved.find((like) => like === user._id)) {
      Setbookmark(true);
      // postState.bookmarked= true
    } else {
      // postState.bookmarked = falsea
      Setbookmark(false);
    }
  }, [job.job.saved, user._id]);

  const togglesave = (e) => {
    e.preventDefault();

    if (bookmarked) {
      unsavejob(job.job._id);
      Setbookmark(false);
    } else {
      savejob(job.job._id);
      Setbookmark(true);
    }
  };
  return (
    <Wrapper>
      <div className="jobbox glassmorphism">
        {/* header */}

        <div className="jobboxheader">
          <div className="companyinfo">
            <img
              className="profile-pic-sm"
              src={job.job.company.profilePicture}
              alt=""
            />
            <div className="jobfield">
              <span className="jobname">{job.job.title}</span>
              <p className="companyname">{job.job.company.name}</p>
            </div>
          </div>
          <div className="savejob">
            <p className="blue-color">
              {!bookmarked ? "Save Job" : "Unsave Job"}
            </p>
            {bookmarked ? (
              <BsFillBookmarkFill onClick={togglesave} />
            ) : (
              <BsBookmark onClick={togglesave} />
            )}
          </div>
        </div>

        {/* body */}

        <div className="jobdetail">{job.job.description}</div>

        <div className="jobtype">
          <p className="fulltime bluebox">{job.job.jobtype}</p>
          <p className="jobfield bluebox">{job.job.sector}</p>
          <p className="jobfield bluebox">{job.job.experiencelvl}</p>
        </div>
        {/* footer */}

        <div className="jobboxfooter">
          <div className="jobspecification">
            <div className="jobprice">
              <RiMoneyDollarCircleFill className="blue-icon" />
              <p className="price">
                ${job.job.sallary} <span className="light-text">/Month</span>
              </p>
            </div>
            <div className="jobLocation">
              <IoTime className="blue-icon" />
              <span className="light-text">
                <Countdown date={job.job.closeDate} />
              </span>
            </div>
          </div>

          <button
            className="btn-apply"
            onClick={() => navigate(`/job/jobdetail/${job.job._id}`)}
          >
            Learn More
          </button>
        </div>

        {/* end */}
      </div>
    </Wrapper>
  );
};

export default JobBox;

