import React, { useState } from "react";
import Wrapper from "../wrappers/UserInfoCard";
import { useAppContext } from "../../../context/appContext";
import { useNavigate } from "react-router-dom";
import Followbtn from "./Followbtn";
import { MdCancel } from "react-icons/md";
import { RiEditFill } from "react-icons/ri";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import axios from "axios";

const UserInfoCard = ({ profileUser }) => {
  const { user, token, changevalue } = useAppContext();
  const navigate = useNavigate();
  const option = {
    preview: null,
    profileimg: null,
    isedit: false,
    file: "",
  };
  const [profileimg, setprofile] = useState(option);

  const fileselection = (e) => {
    if (e.target.files && e.target.files[0]) {
      let file = e.target.files[0];
      let blobURL = URL.createObjectURL(file);
      setprofile({
        ...profileimg,
        isedit: true,
        preview: blobURL,
        file: e.target.files[0],
      });
    }
  };

  const onsave = async () => {
    const formData = new FormData();
    formData.append("profileimg", profileimg.file);
    await axios
      .patch(`/api/v1/profile/editprofileimg`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        setprofile({
          ...profileimg,
          isedit: false,
          profileimg: profileimg.preview,
          preview: null,
          file: "",
        }),
        changevalue({ name: "photo", value: profileimg.preview })
      );
  };

  const oncancel = () => {
    setprofile({ ...profileimg, isedit: false, preview: null });
  };

  return (
    <Wrapper className="user-card">
      <div className="info-card glassmorphism">
        <div className="userimage">
          <img
            className="profile-pic-xL"
            src={
              profileimg.preview ??
              profileimg.profileimg ??
              profileUser.profilePicture
            }
            alt=""
          />
          <input type="file" id="profilep" onChange={fileselection} />

          {user._id === profileUser._id ? (
            !profileimg.isedit ? (
              <label htmlFor="profilep">
                <RiEditFill className="edit" />
              </label>
            ) : (
              <MdCancel className="cancel" onClick={oncancel} />
            )
          ) : null}
          {profileimg.isedit ? (
            <IoCheckmarkCircleSharp className="correct" onClick={onsave} />
          ) : null}
        </div>
        <div className="username">{profileUser.username}</div>
        <div className="userskill">{profileUser.usertype}</div>
        {profileUser._id != user._id ? (
          <Followbtn items={profileUser} />
        ) : profileUser.usertype == "individual" ? (
          <div
            className="edit-profile"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/user/edit")}
          >
            Edit Profile
          </div>
        ) : (
          <div
            className="edit-profile"
            onClick={() => navigate("/user/add/job")}
            style={{ cursor: "pointer" }}
          >
            Add job
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default UserInfoCard;
