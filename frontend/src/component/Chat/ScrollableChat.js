import { Avatar, Tooltip } from "@chakra-ui/react";
import React from "react";
import ScrollableFeed from "react-scrollable-feed";
import {
  isLastMessage,
  isSameSender,
  isSameSenderMargin,
} from "../../config/ChatLogic";
import { useAppContext } from "../../context/appContext";

const ScrollableChat = ({ messages }) => {
  const { user } = useAppContext();
  return (
    <ScrollableFeed>
      {messages &&
        messages.map((m, i) => {
          return (
            <div style={{ display: "flex" }} key={m._id}>
              {(isSameSender(messages, m, i, user._id) ||
                isLastMessage(messages, i, user._id)) && (
                <Tooltip
                  label={m.sender.name}
                  placement="bottom-start"
                  hasArrow
                >
                  <Avatar
                    mt="7px"
                    mr={1}
                    size="sm"
                    src={m.sender.avatarImage}
                    name={m.sender.name}
                    cursor="pointer"
                  />
                </Tooltip>
              )}
              <span
                style={{
                  backgroundColor:
                    m.sender._id === user._id ? "#bee3f8" : "#b9f5d0",
                  borderRadius: "20px",
                  padding: "5px 15px",
                  maxWidth: "75%",
                  marginLeft: isSameSenderMargin(messages, m, i, user._id),
                  marginTop: isSameSender(messages, m, i, user._id) ? 3 : 10,
                }}
              >
                {m.content}
              </span>
            </div>
          );
        })}
    </ScrollableFeed>
  );
};

export default ScrollableChat;
