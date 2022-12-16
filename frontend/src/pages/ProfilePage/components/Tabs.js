import React from "react";
import Wrapper from "../wrappers/Tabs";

const Tabs = ({ activeindex, setTab }) => {
  const usertype = "company";

  const userlst = [
    {
      id: 1,
      text: "posts",
    },

    {
      id: 4,
      text: "About",
    },
    {
      id: 6,
      text: "Saved Posts",
    },
    {
      id: 5,
      text: "saved jobs",
    },

    {
      id: 2,
      text: "job history",
    },
  ];

  let tablst = usertype === "company" ? userlst : userlst;

  return (
    <Wrapper>
      {tablst.map((item, index) => {
        return activeindex === index ? (
          <h5 key={item.id} className="btn-tab active">
            {item.text}
          </h5>
        ) : (
          <h5 key={item.id} onClick={() => setTab(index)} className="btn-tab ">
            {item.text}
          </h5>
        );
      })}
    </Wrapper>
  );
};

export default Tabs;
