import React, { useState } from "react";
import Wrapper from "./wrappers/ResetPage";
import { Labelinput } from "../../component/formcomponents";
import { BsFillBackspaceFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
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
  };
  const [formvalue, setform] = useState(option);
  const handleChange = (e) => {
    setform({ ...formvalue, [e.target.name]: e.target.value });
  };

  const onOttp = (e) => {
    console.log(e.target.value);
    if (e.target.value.length > 1) {
    } else {
      setform({ ...formvalue, [e.target.name]: e.target.value });
    }
  };

  const onSubmit = () => {
    if (formvalue.active === 0) {
      if (formvalue.email) {
        setform({ ...formvalue, active: 1 });
      }
    }
    if (formvalue.active === 1) {
      if (
        !formvalue.ottp1 ||
        !formvalue.ottp2 ||
        !formvalue.ottp3 ||
        !formvalue.ottp4
      ) {
      } else {
        setform({ ...formvalue, active: 2 });
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
          <label htmlFor="">OTTP</label>
          <div className="ottp">
            <input
              type="text"
              name="ottp1"
              id=""
              className="ott"
              value={formvalue.ottp1}
              onChange={onOttp}
            />
            <input
              type="text"
              name="ottp2"
              id=""
              className="ott"
              value={formvalue.ottp2}
              onChange={onOttp}
            />
            <input
              type="text"
              name="ottp3"
              id=""
              className="ott"
              value={formvalue.ottp3}
              onChange={onOttp}
            />
            <input
              type="text"
              name="ottp4"
              id=""
              className="ott"
              value={formvalue.ottp4}
              onChange={onOttp}
            />
          </div>
        </section>

        <section className={formvalue.active === 2 ? "reset" : " d-none"}>
          <Labelinput
            name={"newpassword"}
            label="New Password"
            placeholder={"Enter New Password"}
            handleChange={handleChange}
          />

          <Labelinput
            name={"confirmpassword"}
            label="Confirm Password"
            placeholder={"Enter Confirm Password"}
            handleChange={handleChange}
          />
        </section>
        <button className="btn-submit" onClick={onSubmit}>
          Submit
        </button>
      </div>
    </Wrapper>
  );
};

export default ResetPage;
