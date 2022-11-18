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
import {Recommendation} from "../../component"
import lstrecommendation from "../../utils/lstrecommendation";
const JobDetail = () => {
  const { requirement, company } = joblists;
  const [isReadmore, setReadmore] = useState(false);
  const [save, setSave] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [ismodal, setModal] = useState(false);
  useEffect(() => {
    console.log(requirement);
  }, []);

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

  return (
    <Wrapper className="">
      <SubmitProporsal ismodal={ismodal} onbid={onbid} />
      <div className="left-section glassmorphism">
        <section className="one">
          <div className="title">
            <h1>Data Analyst / Reports / SQL Developer</h1>
            <div className="dropdown">
              <BsThreeDots
                onClick={() => setDropdown((dropdown) => !dropdown)}
              />
              <div
                className={
                  dropdown ? "dropdown-option glassmorphism " : "d-none"
                }
              >
                <AiTwotoneEdit className="icon" />

                <AiTwotoneDelete />
              </div>
            </div>
          </div>
          <div className="place">
            <span className="location">Nepal,kathmandu</span>
            <span>8 hours ago</span>
          </div>
          <div className="jobtype">
            <FaBriefcase className="icon" />
            <span>Full-time</span>
          </div>
          <div className="jobtype">
            <BiBuilding className="icon" />
            <span>10 - 15 Employee</span>
          </div>
          <div className="jobtype">
            <RiMoneyDollarCircleLine className="icon" />
            <span>10000 - 15000 /Month</span>
          </div>
          <div className="recommend">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
              alt=""
              className="profile-pic-sm"
            />
            <span>Your profile match this job</span>
          </div>
          <div className="buttons">
            <button className="btn-easy" onClick={onbid}>Bid</button>
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
        </section>
        <section className="two">
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            doloremque fugiat, qui fugit ab accusamus, nobis tempora hic
            asperiores sit ad quisquam!s
          </p>
          <div className="responsiblity">
            <h3>Responsiblity</h3>
            {requirement.map((item) => {
              return <li key={item.id}>{item.content}</li>;
            })}
          </div>
          <div className="responsiblity">
            <h3>Requirement</h3>
            {requirement.map((item) => {
              return <li key={item.id}>{item.content}</li>;
            })}
          </div>
          <div className="responsiblity">
            <h3>Benefit</h3>
            {requirement.map((item) => {
              return <li key={item.id}>{item.content}</li>;
            })}
          </div>
        </section>
        <div className="three">
          <h3>About Company</h3>
          <div className="info-container">
            <img src={company.profilepicture} alt="" className="company-pic" />
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
      </div>
      <div className="right-section ">
        {lstrecommendation.map((item) => (
          <Recommendation item={item} key={item.id} />
        ))}
        <Todo />
      </div>
    </Wrapper>
  );
};

export default JobDetail;
