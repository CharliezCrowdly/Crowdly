import React from "react";
import Wrapper from "../wrappers/SubmitProposal";
import { ImCross } from "react-icons/im";
import axios from "axios";

const SubmitProporsal = React.memo(({ ismodal, onbid }) => {
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [setBid, setSelectedBid] = React.useState(0);

  const jobId = window.location.pathname.split("/")[3];

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleBidSelect = (event) => {
    setSelectedBid(event.target.value);
  };
  // const onBidChange = async (e) => {};
  const handleApply = (e) => {
    // console.log(e);
    e.preventDefault();
    const formData = new FormData();
    formData.append("proposal", selectedFile);
    formData.append("bid", setBid);
    formData.append("jobId", jobId);

    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "multipart/form-data",
      },
    };

    axios
      .post("/api/v1/job/applyForJob", formData, config)
      .then((result) => {
        toast.success(result.data.msg, toastOptions);
        // window.location.reload();
      })
      .catch((err) => {
        toast.error(err, toastOptions);
        console.log(err);
      });
  };
  return (
    <Wrapper className={ismodal ? "glassmorphism active " : "glassmorphism"}>
      <form className="form-container" enctype="multipart/form-data">
        <h1>Place Bid</h1>
        <label htmlFor="">Bid</label>
        <input
          className="bid"
          type="number"
          name="bid"
          id="bid"
          placeholder="Enter You Bid"
          onChange={handleBidSelect}
          required
        />
        <label htmlFor="">File</label>
        <input
          type="file"
          name="image"
          id="proposal"
          onChange={handleFileSelect}
          required
        />
        <ImCross className="icon" onClick={onbid} />
        <button className="btn-submit" type="submit" onClick={handleApply}>
          Submit
        </button>
      </form>
    </Wrapper>
  );
});
export default SubmitProporsal;
