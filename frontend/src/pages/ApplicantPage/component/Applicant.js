import React, { useState } from "react";
import { TiTick } from "react-icons/ti";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import Wrapper from "../wrappers/Applicant";
import lstskill from "../utils/lstskill";
const Applicant = () => {
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
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <span className="username">username</span>
          <TiTick />
        </div>

        <p>Design ,ui/ux,react +50more</p>
        <div className="action">
          {liked ? (
            <AiFillStar className="icon" onClick={onpinned} />
          ) : (
            <AiOutlineStar className="icon" onClick={onpinned} />
          )}
          <button className="send-msg">Show Proposal</button>
        </div>
      </div>
      <hr />
      <div className="applicant-body">
        <div className="userinfo">
          <div className="info">
            <p>Username</p>
            <p>John Doe</p>
          </div>
          <div className="info">
            <p>Email</p>
            <p>John Doe</p>
          </div>
          <div className="info">
            <p>Followers</p>
            <p>1000</p>
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
          <h1>$ 20000</h1>
        </div>
      </div>
      <hr />
      <section className="about">
        <div className="userinfo">
          <div className="info">
            <p>Location</p>
            <p>Kathmandu</p>
          </div>
          <div className="info">
            <p>Date</p>
            <p>2022/11/22</p>
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
