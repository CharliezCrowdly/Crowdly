import React, { useState } from "react";
import { Labelinput } from "../../component/formcomponents";
import axios from "axios";
import { useAppContext } from "../../context/appContext";
import { Alert } from "../../component";
import Wrapper from "./wrapper/ChangePassword";
const ChangePassword = () => {
  const option = {
    oldp: "",
    newp: "",
    vnewp: "",
  };
  const [value, setvalues] = useState(option);
  const { token, displayalert, showAlert } = useAppContext();
  const handleChange = (e) => {
    setvalues({ ...value, [e.target.name]: e.target.value });
  };

  const onsubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .patch(
          "/api/v1/profile/changepassword",
          { ...value },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          if (res.data.success === true) {
            displayalert({ alertType: "success", alertText: res.data.message });
            setvalues(option);
          } else {
            displayalert({ alertType: "danger", alertText: res.data.message });
          }
        });
    } catch (e) {
      console.log(e);
      displayalert({ alertType: "danger", alertText: e.response.data.message });
    }
  };

  return (
    <Wrapper className="glassmorphism">
      {showAlert && <Alert />}
      <h1>Change Password</h1>
      <Labelinput
        type={"text"}
        name={"oldp"}
        value={value.oldp}
        handleChange={handleChange}
        label={"Old Password"}
        placeholder={"Enter Old Password"}
      />
      <div className="mt-2"></div>

      <Labelinput
        name={"newp"}
        value={value.newp}
        handleChange={handleChange}
        label={"New Password"}
        placeholder={"Enter New Password"}
        type={"text"}
      />
      <div className="mt-2"></div>

      <Labelinput
        name={"vnewp"}
        value={value.vnewp}
        handleChange={handleChange}
        label={"Verify New Password"}
        placeholder={"Verify Your Password"}
        type={"text"}
      />
      <div className="mt-2"></div>

      <button onClick={onsubmit}>submit</button>
    </Wrapper>
  );
};

export default ChangePassword;
