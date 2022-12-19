import React, { useEffect, useState } from "react";
import Wrapper from "./wrappers/ResetPage";
import { Labelinput } from "../../component/formcomponents";
import { BsFillBackspaceFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ResetPage = () => {
  const navigate = useNavigate();
  const option = {
    active: 0,
    email: "",
    ottp1: "",
    ottp2: "",
    ottp3: "",
    ottp4: "",
    newpassword: "",
    confirmpassword: "",
    ealert: false,
    color: "danger",
    message: "The link has been expired",
    id: "",
  };
  const [formvalue, setform] = useState(option);
  const handleChange = (e) => {
    setform({ ...formvalue, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    try {
      console.log(window.location.pathname.split("/"));
      const id = window.location.pathname.split("/")[2];
      const token = window.location.pathname.split("/")[3];
      console.log(id, token);
      if (id && token) {
        setform({ ...formvalue, active: 2 });
        const Verify = async () => {
          const { data } = await axios.post(
            `http://localhost:5000/api/v1/auth/user/${id}/${token}`
          );
          if (data.success) {
            setform({ ...formvalue, active: 2, ealert: false, id: data.id });
          } else {
            setform({ ...formvalue, ealert: true, color: "danger" });
          }
        };
        Verify();
      }
    } catch (e) {}
  }, []);

  const onSubmit = async () => {
    if (formvalue.active === 0) {
      if (formvalue.email) {
        const { data } = await axios.post(
          "http://localhost:5000/api/v1/auth/user",
          { email: formvalue.email }
        );
        if (data.success) {
          setform({ ...formvalue, active: 1, ealert: false });
        } else {
          setform({
            ...formvalue,
            ealert: true,
            message: "The provided email is not valid",
          });
        }
      }
    }
    if (formvalue.active === 2) {
      if (
        formvalue.newpassword &&
        formvalue.confirmpassword &&
        formvalue.newpassword === formvalue.confirmpassword
      ) {
        const { data } = await axios.post(
          `http://localhost:5000/api/v1/auth/resetpassword`,
          { password: formvalue.newpassword, id: formvalue.id }
        );
        if (data.success) {
          setform({
            ...formvalue,
            ealert: true,
            message: "Password Reset Successfull! Redirecting to login page",
            color: "success",
          });
          setTimeout(() => {
            navigate("/user/feeds");
          }, 3000);
        } else {
          setform({
            ...formvalue,
            ealert: true,
            message: "Something went wrong",
          });
        }
      } else {
        setform({
          ...formvalue,
          ealert: true,
          message: "The provided password is not valid",
        });
      }
    }
  };

  return (
    <Wrapper>
      <h1>Reset Password</h1>
      <BsFillBackspaceFill className="icon" onClick={() => navigate(-1)} />
      <div className="glassmorphism form">
        <div className={formvalue.active === 0 ? "emal" : "d-none"}>
          <Labelinput
            name={"email"}
            label="Email"
            placeholder={"Enter Email"}
            type={"email"}
            value={formvalue.email}
            handleChange={handleChange}
          />
        </div>
        <section className={formvalue.active === 1 ? "ottpsection" : "d-none"}>
          <h2 htmlFor="" style={{ textAlign: "center" }}>
            Success
          </h2>
          <br />
          <div className="ottp">
            <h4 style={{ textAlign: "center" }}>
              The Password reset link is sent to the provided email address.
            </h4>
          </div>
        </section>
        <section className={formvalue.active === 2 ? "reset" : " d-none"}>
          <Labelinput
            type={"password"}
            name={"newpassword"}
            label="New Password"
            placeholder={"Enter New Password"}
            handleChange={handleChange}
          />

          <Labelinput
            type={"password"}
            name={"confirmpassword"}
            label="Confirm Password"
            placeholder={"Enter Confirm Password"}
            handleChange={handleChange}
          />
        </section>{" "}
        {formvalue.ealert ? (
          <div
            className={
              formvalue.color == "success"
                ? "alert alert-success"
                : "alert alert-danger"
            }
          >
            {formvalue.message}
          </div>
        ) : null}
        {formvalue.active != 1 ? (
          <button className="btn-submit" onClick={onSubmit}>
            Submit
          </button>
        ) : (
          <></>
        )}
      </div>
    </Wrapper>
  );
};

export default ResetPage;
