import React, { useState, useEffect } from "react";
import { TiTick } from "react-icons/ti";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import Wrapper from "../wrappers/Applicant";
import lstskill from "../utils/lstskill";
import moment from "moment";
const Applicant = ({ item }) => {
  const { applicant, appliedDate, bid } = item;
  useEffect(() => {
    console.log(item);
  }, []);
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
          <TiTick />
        </div>

        <p>Design ,ui/ux,react +50more</p>
        <div className="action">
          {liked ? (
            <AiFillStar className="icon" onClick={onpinned} />
          ) : (
            <AiOutlineStar className="icon" onClick={onpinned} />
          )}
          <a
            href={`http://localhost:5000/${item.proposal}`}
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
              {lstskill.map((item, index) => {
                return <button key={index}>{item.skill}</button>;
              })}
            </div>
          </div>
        </div>

        <div className="bid">
          <h3>Bid</h3>
          <h1>$ {bid}</h1>
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
        <button className="btn reject">Reject</button>
        <button className="btn hire">Hire</button>
      </section>
    </Wrapper>
  );
};

export default Applicant;
