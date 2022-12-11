import React, { useState } from "react";
import { RiImageAddFill } from "react-icons/ri";
import { HiLocationMarker } from "react-icons/hi";
import { FcVideoFile } from "react-icons/fc";
import { AiFillFile } from "react-icons/ai";
import Wrapper from "../wrapper/Searchbar";
import { useAppContext } from "../../../context/appContext";

const uploadState = {
  location: false,
  image: false,
  video: false,
  audio: false,
  other: false,
  userLocation: "",
  postfile: "",
  description: "",
  filetype: "",
};

const Searchbar = React.memo(({  toggleload }) => {
  const [upload, setUpload] = useState(uploadState);
  const [preview, setPreview] = useState("");
 
  const { createPost, isSubmit } = useAppContext();

  const toggleLocation = (e) => {
    setUpload({ ...upload, location: !upload.location });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setUpload({ ...upload, [e.target.name]: e.target.value });
  };

  const onSubmit =(e) => {
    e.preventDefault();
    const { postfile, userLocation, description, filetype } = upload;

    const userpost = { postfile, userLocation, description, filetype };

   createPost({ userpost });

   setUpload(uploadState);
   toggleload();
  
        
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
      let reader = new FileReader();

      reader.onload = function () {
        setPreview(reader.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  return (
    <Wrapper>
      <div className="feedsearcharea">
        <div className="feedsearch glassmorphism">
          <img
            className="profile-pic-sm"
            src="https://i.pinimg.com/736x/0d/0b/21/0d0b211c1ecc0562b9f4c2a4305c9436.jpg"
            alt=""
          />

          <input
            type="textarea"
            placeholder="Whats on your mind?"
            className="searchbar"
            name="description"
            value={upload.description}
            onChange={handleChange}
          />
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
          <HiLocationMarker className="icon" onClick={toggleLocation} />
          <button className="btn-send"  onClick={onSubmit}>
            Post
          </button>
        </div>

        <input
          type="text"
          name="userLocation"
          className={
            upload.location ? "location-input glassmorphism" : "d-none"
          }
          placeholder="Enter location"
          value={upload.userLocation}
          onChange={handleChange}
        />

        <div className="imagefield ">
          {upload.audio ? (
            <div className="audio-select glassmorphism">
              <AiFillFile className="icon" />{" "}
              <div className="updated"> Audio Selected</div>
            </div>
          ) : (
            <div></div>
          )}
          {upload.image ? (
            <div className="img-select glassmorphism">
              <img src={preview} className="update-img" alt="" />
              <span>Image selected</span>
            </div>
          ) : (
            <div></div>
          )}
          {upload.video ? (
            <div className="video-select glassmorphism">
              <FcVideoFile className="icon" />{" "}
              <div className="updated"> Video Selected</div>
            </div>
          ) : (
            <div></div>
          )}
          {upload.other ? (
            <div className="file-select glassmorphism">
              <AiFillFile className="icon" />{" "}
              <div className="updated"> file Selected</div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </Wrapper>
  );
});

export default Searchbar;
