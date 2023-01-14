import React, { useState, useEffect } from "react";
import { TiTick } from "react-icons/ti";
import { FcApproval, FcCancel, FcCheckmark, FcInfo } from "react-icons/fc";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import Wrapper from "../wrappers/Applicant";
import moment from "moment";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useAppContext } from "../../../context/appContext";
const Applicant = ({ item, changestatus, setrefresh }) => {
  const [itemSet, setItem] = useState(item);
  //get job id from url
  const { id } = useParams();
  const { token } = useAppContext();

  const { applicant, appliedDate, bid } = itemSet;

  const options = {
    drop: false,
  };
  const [drop, setDrop] = useState(false);
  const [liked, setliked] = useState(false);
  const [option, setoption] = useState(options);

  const onpinned = (e) => {
    if (liked) {
      setliked(false);
    } else {
      setliked(true);
    }
    e.stopPropagation();
  };

  const handleReject = async (e) => {
    e.stopPropagation();
    const appId = applicant._id;
    await axios
      .post(
        `/api/v1/job/updateStatus`,
        {
          job_id: id,
          user_id: appId,
          status: "Rejected",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setItem({ ...itemSet, status: "Rejected" });
        console.log(res);
      });
  };
  const handleHire = async (e) => {
    e.stopPropagation();
    const appId = applicant._id;
    await axios
      .post(
        `/api/v1/job/updateStatus`,
        {
          job_id: id,
          user_id: appId,
          status: "Hired",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setItem({ ...itemSet, status: "Hired" });
        // changestatus();
        setrefresh(res);

        // console.log(itemSet.applicant);
      });
  };
  return (
    <Wrapper
      className={option.drop ? "active" : ""}
      onClick={() => setoption({ ...option, drop: !option.drop })}
    >
      <div className="applicant-header">
        <div className="img-container">
          <img
            className="profilePicture"
            src={applicant.profilePicture}
            alt=""
          />
          <span className="username">{applicant.name}</span>
          {item.status === "Hired" ? (
            <FcApproval className="icon" />
          ) : item.status === "Rejected" ? (
            <FcCancel className="icon" />
          ) : (
            <FcInfo className="icon" />
          )}
        </div>

        <p>Rs {bid}</p>
        <div className="action">
          {liked ? (
            <AiFillStar className="icon" onClick={onpinned} />
          ) : (
            <AiOutlineStar className="icon" onClick={onpinned} />
          )}
          <a
            href={`http://localhost:5000/${itemSet.proposal}`}
            download
            className="send-msg"
            onClick={(e) => e.stopPropagation()}
          >
            Show Proposal
          </a>
        </div>
      </div>
      <hr />
      <div className="applicant-body">
        <div className="userinfo">
          <div className="info">
            <p>Username</p>
            <p>{applicant.username}</p>
          </div>
          <div className="info">
            <p>Email</p>
            <p>{applicant.email}</p>
          </div>
          <div className="info">
            <p>Followers</p>
            <p>{applicant.followers.length}</p>
          </div>
        </div>

        <div className="information">
          <div className="skills">
            <p>Skill</p>
            <div className="list">
              {applicant.skillSet.map((item, index) => {
                return <button key={index}>{item.skill}</button>;
              })}
            </div>
          </div>
        </div>

        <div className="bid">
          <h3>Bid</h3>
          <h1>Rs {bid}</h1>
        </div>
      </div>
      <hr />
      <section className="about">
        <div className="userinfo">
          <div className="info">
            <p>{applicant.location ? applicant.location : "kathmandu"}</p>
            <p>Kathmandu</p>
          </div>
          <div className="info">
            <p>Applied Date</p>
            <p>{moment(appliedDate).fromNow()}</p>
          </div>
        </div>
        <div className="content">
          <h3>About</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            maiores perspiciatis aperiam magni voluptatem ipsa eligendi, illum
            quisquam aut possimus corrupti pariatur?
          </p>
        </div>
      </section>

      <section className="options">
        <button className="btn reject" onClick={handleReject}>
          Reject
        </button>
        <button className="btn hire" onClick={(e) => handleHire(e)}>
          Hire
        </button>
      </section>
    </Wrapper>
  );
};

export default Applicant;
