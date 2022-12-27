import React, { useState, useEffect } from "react";
import { TiTick } from "react-icons/ti";
import { FcApproval, FcCancel, FcCheckmark, FcInfo } from "react-icons/fc";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import Wrapper from "../wrappers/Applicant";
import moment from "moment";
import { useParams } from "react-router-dom";
import axios from "axios";
import dateFormat from "dateformat";
import { useAppContext } from "../../../context/appContext";
const Applicant = ({ trans, changestatus, setrefresh }) => {
  const [transaction, setTransaction] = useState(trans);
  const [editable, setEditable] = useState(
    transaction.status == "Rejected" || transaction.status == "Under-Review"
  );

  const { token } = useAppContext();

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

  const handleAccept = async (e) => {
    e.stopPropagation();
    try {
      const response = await axios.put(
        `http://localhost:5000/api/v1/job/updateTransaction`,
        {
          paymentId: transaction._id,
          status: "Completed",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.success) {
        setTransaction({ ...transaction, status: "Completed" });
        setEditable(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleReject = async (e) => {
    e.stopPropagation();
    try {
      const response = await axios.put(
        `http://localhost:5000/api/v1/job/updateTransaction`,
        {
          paymentId: transaction._id,
          status: "Rejected",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.success) {
        setTransaction({ ...transaction, status: "Rejected" });
      }
    } catch (error) {
      console.log(error);
    }
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
            src={transaction.reciver.profilePicture}
            alt=""
          />
          <div className="info">
            <span className="username">{transaction.sender.name}</span>
            <p>To {transaction.reciver.name}</p>
          </div>
        </div>

        <p>Rs {transaction.amount}</p>

        <div className="action">
          <p className="sta">{transaction.status}</p>
        </div>
      </div>
      <hr />
      <div className="applicant-body">
        <div className="userinfo">
          <div className="info">
            <h1>Reciever</h1>

            <p>Name</p>
            <p>{transaction.reciver.name}</p>
          </div>
          <div className="info">
            <p>Email</p>
            <p>{transaction.reciver.email}</p>
          </div>
          <div className="info">
            <p>Followers</p>
            <p>{transaction.reciver.followers.length}</p>
          </div>
        </div>

        <div className="userinfo">
          <h1>Sender</h1>
          <div className="info">
            <p>Name</p>
            <p>{transaction.sender.name}</p>
          </div>
          <div className="info">
            <p>Email</p>
            <p>{transaction.sender.email}</p>
          </div>
          <div className="info">
            <p>Followers</p>
            <p>{transaction.sender.followers.length}</p>
          </div>
        </div>

        <div className="bid">
          <h3>Bid</h3>
          <h1>Rs {transaction.amount}</h1>
        </div>
      </div>
      <hr />
      <section className="about">
        <div className="userinfo">
          <div className="info">
            <p>Payment Initiated On</p>
            <p>{dateFormat(transaction.createdAt, "mmmm dS, yyyy")}</p>
            {/* <p>{format(transaction.createdAt, "yyyy/MM/dd kk:mm:ss")}</p> */}
          </div>
          <div className="info">
            <p>Payment Updated On</p>
            <p>{dateFormat(transaction.updatedAt, "mmmm dS, yyyy")}</p>
          </div>
        </div>
        <div className="content">
          <h3>{transaction.job.title}</h3>
          <p>
            {transaction.job.description.length > 100 ? (
              <span>
                {transaction.job.description.substring(0, 100)}...
                <a href="#">Read More</a>
              </span>
            ) : (
              <span>{transaction.job.description}</span>
            )}
          </p>
        </div>
      </section>

      <section className="options">
        <button
          className="btn reject"
          onClick={handleReject}
          disabled={!editable}
        >
          Decline
        </button>
        <button
          className="btn hire"
          onClick={handleAccept}
          disabled={!editable}
        >
          Approve
        </button>
      </section>
    </Wrapper>
  );
};

export default Applicant;
