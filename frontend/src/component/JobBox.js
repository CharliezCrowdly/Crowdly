import React from "react";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import Wrapper from "../wrappers/JobBox";

const JobBox = () => {
  return (
    <Wrapper>
      <div className="jobbox glassmorphism">
        {/* header */}

        <div className="jobboxheader">
          <div className="companyinfo">
            <img
              className="profile-pic-sm"
              src="https://i.pinimg.com/736x/0d/0b/21/0d0b211c1ecc0562b9f4c2a4305c9436.jpg"
              alt=""
            />
            <div className="jobfield">
              <span className="jobname">Junior Ui/ UX Developer</span>
              <p className="companyname">company name</p>
            </div>
          </div>
          <div className="savejob">
            <p className="blue-color">Save Job</p>
            <BsBookmark />
          </div>
        </div>

        {/* body */}

        <div className="jobdetail">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id eligendi
          adipisci ab doloremque consequatur, quam ipsum temporibus natus,
          voluptate vitae, explicabo cupiditate!
        </div>

        <div className="jobtype">
          <p className="fulltime bluebox">FullTime</p>
          <p className="jobfield bluebox">IT</p>
          <p className="jobfield bluebox">Remote</p>
        </div>
        {/* footer */}

        <div className="jobboxfooter">
          <div className="jobspecification">
            <div className="jobprice">
              <RiMoneyDollarCircleFill className="blue-icon"/>
              <p className="price">
                $12k - 14K <span className="light-text">/Month</span>
              </p>
            </div>
            <div className="jobLocation">
              <HiLocationMarker className="blue-icon" />
              <span className="light-text">kathmandu</span>
            </div>
          </div>

          <button className="btn-apply">Apply Now</button>
        </div>

        {/* end */}
      </div>
    </Wrapper>
  );
};

export default JobBox;
