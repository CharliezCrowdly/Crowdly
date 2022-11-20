import React, { useState } from "react";
import Wrapper from "./wrapper/PostEditPage";
import PostInput from "./component/PostInput";
import { IoMdResize } from "react-icons/io";
import { RiImageAddFill } from "react-icons/ri";

const uploadState = {
  location: false,
  image: false,
  video: false,
  audio: false,
  other: false,
  userLocation: "",
  postfile: "",
  description: "",
  filetype: "video/mp4",
};
const PostEditPage = () => {
  const options = {
    description: "",
    location: "",
    File: "",
    fullscreen: false,
  };

  const [value, setValue] = useState(options);
  const [upload, setUpload] = useState(uploadState);
  const [preview, setPreview] = useState(
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
  );

  const togglefullscreen = () => {
    setValue({ ...value, fullscreen: !value.fullscreen });
  };

  const onFileSelection = (e) => {
    var file = e.target.files[0];
    console.log(e.target.files[0].type.substring(0, file.type.indexOf("/")));
    console.log(e.target.files[0].type);

    if (file.type.match("video.*")) {
      setUpload({
        ...upload,
        [e.target.name]: file,
        filetype: e.target.files[0].type,
        image: false,
        video: true,
        audio: false,
        other: false,
      });
    }

    if (file.type.match("image.*")) {
      setUpload({
        ...upload,
        [e.target.name]: file,
        filetype: e.target.files[0].type,

        image: true,
        video: false,
        audio: false,
        other: false,
      });
    }

    if (file.type.match("audio.*")) {
      setUpload({
        ...upload,
        [e.target.name]: file,
        filetype: e.target.files[0].type,

        image: false,
        video: false,
        audio: true,
        other: false,
      });
    }

    if (
      !file.type.match("audio.*") &&
      !file.type.match("video.*") &&
      !file.type.match("image.*")
    ) {
      setUpload({
        ...upload,
        [e.target.name]: file,
        filetype: e.target.files[0].type,

        image: false,
        video: false,
        audio: false,
        other: true,
      });
    }

    if (e.target.files && e.target.files[0]) {
      let file = e.target.files[0];
      let blobURL = URL.createObjectURL(file);
      setPreview(blobURL);
    }
  };

  return (
    <Wrapper className="">
      <div className="card-content">
        <div className="card-front glassmorphism">
          <h3 className={value.fullscreen ? "d-none " : ""}>Edit Post</h3>
          <div className={value.fullscreen ? "edit-img active" : "edit-img"}>
            <label htmlFor="">Edit image</label>
            {upload.filetype.substring(0, upload.filetype.indexOf("/")) ===
              "video" && (
              <video
                className={
                  value.fullscreen ? "glassmorphism active" : "glassmorphism"
                }
                muted
                loop
                controls={true}
              >
                <source type="video/mp4" src={preview} />
              </video>
            )}
            {upload.filetype.substring(0, upload.filetype.indexOf("/")) ===
              "image" && (
              <img
                src={preview}
                alt=""
                className={
                  value.fullscreen ? "glassmorphism active" : "glassmorphism"
                }
              />
            )}
            <div className="fileupload">
              <input
                type="file"
                name="postfile"
                className="uploadfile"
                id=""
                onChange={onFileSelection}
              />
              <RiImageAddFill className="icon" />
            </div>
            <IoMdResize className="icon" onClick={togglefullscreen} />
          </div>
          <PostInput
            name={"description"}
            placeholder={"Enter your Description"}
            value={options.description}
            type={"text"}
          />
          <PostInput
            name={"location"}
            placeholder={"Enter your Location"}
            value={options.location}
            type={"text"}
          />
          <button className="btn-submit">Save</button>
        </div>

        <div className="card-back glassmorphism"></div>
      </div>
    </Wrapper>
  );
};

export default PostEditPage;
