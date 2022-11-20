import React, { useState, useEffect, useRef } from "react";
import Wrapper from "./wrapper/PostEditPage";
import PostInput from "./component/PostInput";
import { IoMdResize } from "react-icons/io";
import { RiImageAddFill } from "react-icons/ri";
import { useAppContext } from "../../context/appContext";
import { useParams } from "react-router-dom";
import axios from "axios";

const uploadState = {
  location: false,
  image: false,
  video: false,
  audio: false,
  other: false,
  location: "",
  postfile: "",
  description: "",
  filetype: "video/mp4",
};
const options = {
  description: "",
  location: "",
  File: "",
  fullscreen: false,
};
const PostEditPage = () => {
  const load = useRef(true);
  const { user, token, updatePost, isLoading } = useAppContext();
  const [value, setValue] = useState(options);
  const [upload, setUpload] = useState(uploadState);
  const [preview, setPreview] = useState(
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
  );
  const { id } = useParams();

  useEffect(() => {
    const fetch = async () => {
      if (load.current === true) {
        await axios
          .get(`/api/v1/posts/postdetail/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            const { post } = res.data;
            setUpload({
              location: false,
              image: false,
              video: false,
              audio: false,
              other: false,
              postfile: post.postfile,
              location: post.location,
              description: post.description,
              filetype: post.filetype,
            });
            setPreview(post.postfile);
          });
      }
    };
    fetch();

    return () => (load.current = false);
  }, [id]);

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const togglefullscreen = () => {
    setValue({ ...value, fullscreen: !value.fullscreen });
  };

  const onsubmit = () => {
    updatePost({
      postid: id,
      description: upload.description,
      location: upload.location,
    });
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

  if (isLoading) {
    return <div>... Loading</div>;
  }

  return (
    <Wrapper className="">
      <div className="card-content">
        <div className="card-front ">
          <h3 className={value.fullscreen ? "d-none " : ""}>Edit Post</h3>
          <div className={value.fullscreen ? "edit-img active" : "edit-img"}>
            <label htmlFor="">Edit image</label>
            {upload.filetype?.substring(0, upload.filetype?.indexOf("/")) ===
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
            {upload.filetype?.substring(0, upload.filetype?.indexOf("/")) ===
              "image" && (
              <img
                src={preview}
                alt=""
                className={
                  value.fullscreen ? "glassmorphism active" : "glassmorphism"
                }
              />
            )}
          </div>
          <PostInput
            name={"description"}
            placeholder={"Enter your Description"}
            value={upload.description}
            type={"text"}
            handleChange={handleChange}
          />
          <PostInput
            name={"location"}
            placeholder={"Enter your Location"}
            value={upload.location}
            type={"text"}
            handleChange={handleChange}
          />
          <button className="btn-submit">Save</button>
        </div>

        <div className="card-back">
          <p className="card-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit iste
            sequi architecto amet nihil nesciunt dolore voluptatum quasi,
            maiores eveniet! Dolorem, et.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default PostEditPage;
