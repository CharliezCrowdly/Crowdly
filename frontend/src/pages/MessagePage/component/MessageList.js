import React from "react";
import Wrapper from "../wrapper/MessageList";
import { FiSearch } from "react-icons/fi";
import UserMessage from "./UserMessage";
import lstmessage from "../../../utils/lstmessage";
const MessageList = ({ toggle }) => {
  const messageClick = () => {
    toggle();
  };
  return (
    <Wrapper>
      <div className="messagelst">
        <h2 className="heading">Messages</h2>

        <div className="searchbar">
          <FiSearch className="icon" />
          <input
            type="text"
            className="search-input"
            placeholder="search user"
          />
        </div>

        <div className="messagelst">
          {lstmessage.map((item) => {
            return (
              <div className="" onClick={messageClick}>
                <UserMessage item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default MessageList;
