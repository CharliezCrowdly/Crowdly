import React from "react";
import Wrapper from "../wrapper/Chat";

const Chat = () => {
  return (
    <Wrapper>
      <div className="msg-box">
        <div className="received-msg">
          <div className="user-info">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
              alt=""
              className="profile-pic-sm"
            />
            <div className="time">6:53 Am</div>
          </div>

          <div className="msg-description">Hi there, How are you ?</div>
        </div>

        <div className="sent-msg">
          <div className="user-info">
            <img
              src="https://us.123rf.com/450wm/molokowall/molokowall2201/molokowall220100015/180568257-young-smiling-man-adam-avatar-3d-vector-people-character-illustration-cartoon-minimal-style-.jpg?ver=6"
              alt=""
              className="profile-pic-sm"
            />
            <div className="time">6:53 Am</div>
          </div>

          <div className="msg-description">Hi there, How are you ?</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Chat;
