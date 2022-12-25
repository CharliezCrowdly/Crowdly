import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import Wrapper from "../wrappers/SingleNotification";
import { FaCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const SingleNotification = () => {
  const [read, setRead] = useState(false);
  const [drop,setdrop] = useState(false)

  return (
    <Wrapper className={!read ? " active" : ""} onClick={() => setRead(true)}>
      <span className={read ? "dot active" : "dot"}>
        <FaCircle />
      </span>
      <img
        src="https://images.unsplash.com/photo-1627843563095-f6e94676cfe0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        alt=""
      />
      <p className="content">
        <span>username</span>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, voluptas
        sed?
      </p>

      <div className="option">
        <p>2s</p>
        <BsThreeDots onClick={()=>setdrop(prev => !prev)} />

        <div className={drop ? "options":"d-none"}>
          <MdDelete />
          <span>Delete</span>
        </div>
      </div>
    </Wrapper>
  );
};

export default SingleNotification;
