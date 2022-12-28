import React, { useState } from "react";
import Labelinput from "./component/Labelinput";
import Wrapper from "./wrapper/ViewCardPage";
const ViewCardPage = () => {
  const option = {
    cvv: "",
    holdername: "",
    edate: "",
    cardnumber: "",
  };
  const [value, setValue] = useState(option);
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const nhandleChange = (e) => {
    if (e.target.value.length === 16) {
    } else {
      setValue({ ...value, [e.target.name]: e.target.value });
    }
  };
  return (
    <Wrapper>
      <div className="card">
        <img
          src="https://w0.peakpx.com/wallpaper/272/237/HD-wallpaper-color-paint-red-black-background-background-black.jpg"
          alt=""
          srcset=""
          className="cardimg"
        />
        <p>{value.cardnumber ? value.cardnumber : " XXXX-XXXX-XXXX-XXXX"}</p>
        <div className="holdername">
          <h6>Holder Name</h6>
          <p>{value.holdername}</p>
        </div>

        <div className="monthn">
          <h6>Exp Date</h6>
          <p>{value.edate}</p>
        </div>

        <img
          src="https://e7.pngegg.com/pngimages/865/547/png-clipart-rectangular-brown-and-black-sim-card-illustration-chip-pin-solutions-ltd-emv-payment-card-credit-card-chip-company-text.png"
          alt=""
          srcset=""
          className="chip"
        />
      </div>
      <form action="" className="">
        <Labelinput
          handleChange={nhandleChange}
          value={value.cardnumber}
          name={"cardnumber"}
          label={"Card Number"}
          type={"number"}
          maxLength={16}
          placeholder={"Enter Your Card Number"}
        />
        <Labelinput
          handleChange={handleChange}
          value={value.holdername}
          name={"holdername"}
          label={"Holder Name"}
          placeholder={"Enter Your Holder Name"}
        />
        <div class="d-grid">
          <Labelinput
            handleChange={handleChange}
            value={value.edate}
            name={"edate"}
            label={"Expire Date"}
            type={"date"}
          />
          <Labelinput
            handleChange={handleChange}
            value={value.cvv}
            name={"cvv"}
            label={"CVV"}
            type={"text"}
            maxLength={3}
            placeholder={"CVV"}
          />
        </div>

        <button className="btn-submit">submit</button>
      </form>
    </Wrapper>
  );
};

export default ViewCardPage;
