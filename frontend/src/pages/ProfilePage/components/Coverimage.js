import React, { useState, useEffect } from "react";
import Wrapper from "../wrappers/Coverimage";
import { useAppContext } from "../../../context/appContext";

const Coverimage = ({ coverimage }) => {
  const { profileUser,isLoading } = useAppContext();

  const option = {
    preview: null,
    coverimg:null,
    isedit: false,
  };
  const [coverpage, setCover] = useState(option);

 
  const fileselection = (e) => {
    if (e.target.files && e.target.files[0]) {
      let file = e.target.files[0];
      let blobURL = URL.createObjectURL(file);
      setCover({ ...coverpage, isedit: true, preview: blobURL });
    }
  };

  const oncancel = () => {
    setCover({ ...coverpage, isedit: false, preview: null });
  };

  const onsave = () => {
    setCover({
      ...coverpage,
      isedit: false,
      coverimg: coverpage.preview,
      preview: null,
    });
  };

  

  if(isLoading){
    return <div>  </div>
  }

  return (
    <Wrapper>
      <img
        className="coverimg"
        src={coverpage.preview ?? coverpage.coverimg ?? profileUser.coverpage}
        alt=""
      />
      <input
        type="file"
        accept="image/*"
        id="cover"
        name="cover"
        className="d-none"
        onChange={fileselection}
      />
      <div className="btns">
        {!coverpage.isedit ? (
          <label htmlFor="cover" className="btn-edit ">
            Edit Cover Page
          </label>
        ) : (
          <button onClick={oncancel}>cancel</button>
        )}

        {coverpage.isedit ? <button onClick={onsave}>save</button> : null}
      </div>
    </Wrapper>
  );
};

export default Coverimage;
