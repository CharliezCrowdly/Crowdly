import React from "react";
import Wrapper from "../wrappers/Tabs";
import { useAppContext } from "../../../context/appContext";

const Tabs = ({ activeindex, setTab }) => {
  const { user } = useAppContext();

  const userlst = [
    {
      id: 0,
      text: "posts",
    },

    {
      id: 1,
      text: "About",
    },
    {
      id: 2,
      text: "Saved Posts",
    },
    {
      id: 3,
      text: "saved jobs",
    },

    {
      id: 4,
      text: "job history",
    },
  ];

  const userlst2 = [
    {
      id: 0,
      text: "posts",
    },

    {
      id: 1,
      text: "About",
    },
    {
      id: 2,
      text: "Saved Posts",
    },
    {
      id: 3,
      text: "saved jobs",
    },
  ];

  let tablst = user.usertype === "company" ? userlst2 : userlst;

  return (
    <Wrapper>
      {tablst.map((item, index) => {
        return activeindex === item.id ? (
          <h5 key={item.id} className="btn-tab active">
            {item.text}
          </h5>
        ) : (
          <h5
            key={item.id}
            onClick={() => setTab(item.id)}
            className="btn-tab "
          >
            {item.text}
          </h5>
        );
      })}
    </Wrapper>
  );
};

export default Tabs;
