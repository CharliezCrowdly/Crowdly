import React, { useState } from "react";
import loginImage from "../../assets/images/shape.png";
import Wrapper from "./wrapper/loginpage";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import {
  UnderlineInput,
  SingleSelectInput,
} from "../../component/formcomponents";

const initialState = {
  name: "",
  username: "",
  email: "",
  profilePicture: null,
  password: "",
  isMember: false,
  location: "",
  usertype: null,
};

const LoginPage = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };
  function setUser(usertype) {
    setValues({ ...values, usertype: usertype });
  }

  return (
    <Wrapper>
      <div className="login-container">
        <BsFillArrowLeftCircleFill className="back-arrow" />
        <form className="form-container" onSubmit={onSubmit}>
          <h1 className="login-heading">
            {values.isMember ? "Login" : "Register"}
          </h1>

          <UnderlineInput
            handleChange={handleChange}
            placeholder={"Enter Fullname"}
            type={"text"}
            name={"name"}
          />

          <UnderlineInput
            handleChange={handleChange}
            placeholder={"Enter Email"}
            type={"email"}
            name={"email"}
          />

          {!values.isMember ? <SingleSelectInput setUser={setUser} /> : ""}

          <UnderlineInput
            handleChange={handleChange}
            placeholder={"Enter Password"}
            type={"password"}
            name="password"
          />

          {values.isMember ? (
            <p
              className="toggle-account"
              onClick={() => {
                setValues({ ...values, isMember: false });
              }}
            >
              Don't have a account
              <span className="log-reg"> Register ?</span>
            </p>
          ) : (
            <p
              className="toggle-account"
              onClick={() => {
                setValues({ ...values, isMember: true });
              }}
            >
              Already have a account <span>Login ?</span>
            </p>
          )}

          <button type="submit" className="btn-submit">
            Submit
          </button>
        </form>

        <div className="image-container">
          <img src={loginImage} alt="no " />

          <h4 className="login-info">
            {values.isMember ? " Login To" : "Create"} Your Charlie Account
          </h4>
        </div>
      </div>
    </Wrapper>
  );
};
export default LoginPage;
