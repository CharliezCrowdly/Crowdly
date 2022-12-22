import React, { useState, useEffect } from "react";
import Wrapper from "../wrappers/Coverimage";
import { useAppContext } from "../../../context/appContext";

const Coverimage = ({ coverimage, changeactive, activeindex,subtract }) => {
  const { profileUser, isLoading } = useAppContext();

  const option = {
    preview: null,
    coverimg: null,
    isedit: false,
    file: "",
  };
  const [coverpage, setCover] = useState(option);

  const fileselection = (e) => {
    if (e.target.files && e.target.files[0]) {
      let file = e.target.files[0];
      let blobURL = URL.createObjectURL(file);
      setCover({
        ...coverpage,
        isedit: true,
        preview: blobURL,
        file: e.target.files[0],
      });
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

  if (isLoading) {
    return <div> </div>;
  }

  return (
    <Wrapper>
      <img
        className="coverimg"
        src={coverpage.preview ?? coverpage.coverimg ?? profileUser.coverpage}
        alt=""
      />

      <div className="foll">
        <div
          className={
            activeindex === 5
              ? "followers glassmorphism active"
              : "followers glassmorphism"
          }
          onClick={() => changeactive(5)}
        >
          <h2>{profileUser?.followers?.length}</h2>
          <p>followers</p>
        </div>

        <div
          className={
            activeindex === 6
              ? "following glassmorphism active"
              : "following glassmorphism"
          }
          onClick={() => changeactive(6)}
        >
          <h2>{Number(profileUser?.following?.length) - Number(subtract)}</h2>
          <p>following</p>
        </div>
      </div>
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
