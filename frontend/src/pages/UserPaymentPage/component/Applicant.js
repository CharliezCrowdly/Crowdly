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
  //get job id from url
  const { id } = useParams();
  const { token } = useAppContext();

  // const { applicant, appliedDate, bid } = itemSet;

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
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            alt=""
          />
          <div className="info">
            <span className="username">nischal</span>
            <p>from sujan</p>
          </div>
        </div>

        <p>Rs 1000</p>

        <div className="action">
          <p className="sta">Status</p>
        </div>
      </div>
      <hr />
      <div className="applicant-body">
        <div className="userinfo">
          <div className="info">
            <h1>Reciever</h1>

            <p>Username</p>
            <p>nischal cha</p>
          </div>
          <div className="info">
            <p>Email</p>
            <p>nischal@gmail.com</p>
          </div>
          <div className="info">
            <p>Followers</p>
            <p>200</p>
          </div>
        </div>

        <div className="userinfo">
          <h1>Sender</h1>
          <div className="info">
            <p>Username</p>
            <p>nischal cha</p>
          </div>
          <div className="info">
            <p>Email</p>
            <p>nischal@gmail.com</p>
          </div>
          <div className="info">
            <p>Followers</p>
            <p>200</p>
          </div>
        </div>

        <div className="bid">
          <h3>Bid</h3>
          <h1>Rs 1000</h1>
        </div>
      </div>
      <hr />
      <section className="about">
        <div className="userinfo">
          <div className="info">
            <p>Payment Date</p>
            <p>{moment(new Date()).fromNow()}</p>
          </div>
          <div className="info">
            <p>Applied Date</p>
            <p>{moment(new Date()).fromNow()}</p>
          </div>
        </div>
        <div className="content">
          <h3>Title</h3>
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
