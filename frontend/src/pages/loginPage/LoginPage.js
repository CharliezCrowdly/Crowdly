import React, { useState, useEffect } from "react";
import loginImage from "../../assets/images/shape.png";
import Wrapper from "./wrapper/loginpage";
import { Alert } from "../../component";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import {
  UnderlineInput,
  SingleSelectInput,
} from "../../component/formcomponents";
import { useAppContext } from "../../context/appContext";

import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  username: "",
  email: "",
  profilePicture: null,
  password: "",
  cpassword: "",
  isMember: false,
  location: "",
  usertype: null,
};

const LoginPage = () => {
  const [values, setValues] = useState(initialState);
  const { setupUser, isLoading, showAlert, user } = useAppContext();
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/user/feeds");
      }, 3000);
    }
  }, [user, navigate]);

  const onSubmit = (e) => {
    e.preventDefault();
    const {
      name,
      email,
      password,
      isMember,
      profilePicture,
      location,
      username,
      usertype,
      cpassword
    } = values;

    const currentUser = {
      name,
      email,
      password,
      location,
      profilePicture,
      username,
      usertype,
      cpassword,
    };

    if (isMember) {
      setupUser({
        currentUser,
        endPoint: "login",
        alertText: "Login Successful: Redirection...",
      });
    } else {
      setupUser({
        currentUser,
        endPoint: "register",
        alertText: "User Created!: Redirection...",
      });
    }
  };
  function setUser(usertype) {
    setValues({ ...values, usertype: usertype });
  }

  return (
    <Wrapper>
      <div className="login-container">
        <BsFillArrowLeftCircleFill className="back-arrow" />
        <form className="form-container" onSubmit={onSubmit}>
          {" "}
          {showAlert && <Alert />}
          <h1 className="login-heading">
            {" "}
            {values.isMember ? "Login" : "Register"}
          </h1>{" "}
          {!values.isMember ? (
            <UnderlineInput
              handleChange={handleChange}
              placeholder={"Enter Fullname"}
              type={"text"}
              name={"name"}
            />
          ) : (
            ""
          )}
          {!values.isMember ? (
            <UnderlineInput
              handleChange={handleChange}
              placeholder={"Enter Username"}
              type={"text"}
              name={"username"}
            />
          ) : (
            ""
          )}
          <UnderlineInput
            handleChange={handleChange}
            placeholder={
              !values.isMember ? "Enter Email" : "Enter Email or Username"
            }
            type={!values.isMember ? "email" : "text"}
            name={"email"}
          />
          {!values.isMember ? <SingleSelectInput setUser={setUser} /> : ""}
          <UnderlineInput
            handleChange={handleChange}
            placeholder={"Enter Password"}
            type={"password"}
            name="password"
          />
          {!values.isMember ? (
            <UnderlineInput
              handleChange={handleChange}
              placeholder={"Verify Password"}
              type={"password"}
              name="cpassword"
            />
          ) : null}
          {values.isMember ? (
            <p
              className="toggle-account"
              onClick={() => {
                setValues({ ...values, isMember: false });
              }}
            >
              {" "}
              Don't have a account?
              <span className="log-reg"> Register</span>{" "}
            </p>
          ) : (
            <p
              className="toggle-account"
              onClick={() => {
                setValues({ ...values, isMember: true });
              }}
              data-testid="toggle-account"
            >
              Already have a account? <span>Login</span>{" "}
            </p>
          )}
          <button
            data-testid="btn-submit"
            type="submit"
            disabled={isLoading}
            className="btn-submit"
          >
            Submit
          </button>
        </form>

        <div className="image-container">
          <img src={loginImage} alt="no " />

          <h4 className="login-info">
            {values.isMember ? " Login To" : "Create"} Your Crowdly Account
          </h4>
        </div>
      </div>
    </Wrapper>
  );
};
export default LoginPage;
