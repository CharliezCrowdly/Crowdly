import React from "react";
import Wrapper from "../wrapper/UserMessage";

const UserMessage = ({item,toggle}) => {
  const {id, username,description,profilepic,createdAt} = item
  return (
    <Wrapper>
      <div className="usermessage">
        <div className="message-info">
          <img src={profilepic} alt="" className="profile-pic-sm" />
          <div className="user-info">
            <div className="username">{username}</div>
            <div className="user-msg">{description.substring(0, 30)}</div>
          </div>
        </div>

        <div className="time">{createdAt}</div>
      </div>
    </Wrapper>
  );
};

export default UserMessage;
