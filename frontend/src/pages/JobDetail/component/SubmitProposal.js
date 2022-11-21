import React from "react";
import Wrapper from "../wrappers/SubmitProposal";
import { ImCross } from "react-icons/im";
const SubmitProporsal = React.memo(({ ismodal, onbid }) => {
  return (
    <Wrapper
      className={ismodal ? "glassmorphism active " : "glassmorphism"}
    >
      <div className="form-container">
        <h1>Place Bid</h1>
        <label htmlFor="">Bid</label>
        <input
          className="bid"
          type="number"
          name=""
          id=""
          placeholder="Enter You Bid"
        />
        <label htmlFor="">File</label>
        <input type="file" name="" id="" />
        <ImCross className="icon" onClick={onbid} />
        <button className="btn-submit">Submit</button>
      </div>
    </Wrapper>
  );
});
export default SubmitProporsal;
