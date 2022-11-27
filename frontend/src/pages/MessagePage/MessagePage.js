import React ,{useState} from 'react'
import Wrapper from './wrapper/MessagePage'
import { MessageList,MessageContainer } from './component'
import { IoCall } from "react-icons/io5";
import {BsCameraVideoFill} from "react-icons/bs"
import { IoIosArrowBack} from "react-icons/io"
const MessagePage = () => {

  const [hidden,setHidden] = useState(false)

  const toggle = ()=>{

    setHidden(!hidden)

  }
  return (
    <Wrapper>
      <div className="messagepage">
        <div className={`messagelist glassmorphism ${hidden ? "hidden" : ""}`}>
          <MessageList toggle={toggle} />
        </div>
        <div
          className={`messageContainer glassmorphism ${
            !hidden ? "hidden" : ""
          }`}
        >
          <div className="heading">
            {/* <img
              className="profile-pic-sm"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
              alt=""
            /> */}
            <div className="info">
              <IoIosArrowBack className='icon' onClick={toggle}/>
              <span className="username">Eve Doe</span>
            </div>

            <span className="call-options">
              <IoCall className="icon" />
              <BsCameraVideoFill className="icons" />
            </span>
          </div>
          <MessageContainer />
        </div>
      </div>
    </Wrapper>
  );
}

export default MessagePage
