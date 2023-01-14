import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/appContext";
import Labelinput from "./component/Labelinput";
import Wrapper from "./wrapper/ViewCardPage";
const ViewCardPage = () => {
  const { token } = useAppContext();

  const fetchCard = async () => {
    const res = await fetch("http://localhost:5000/api/v1/job/card", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    res.json().then((res) => {
      console.log(res);
      const data = res.card;
      console.log(data);
      if (data.holdername.length > 0) {
        setValue({
          cvv: data.cvc,
          holdername: data.holdername,
          edate: data.exp_year + "-" + data.exp_month + "-" + data.exp_day,
          cardnumber: data.number,
        });
      }
    });
  };
  useEffect(() => {
    fetchCard();
  }, []);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      number: value.cardnumber,
      cvc: value.cvv,
      exp_year: value.edate.split("-")[0],
      exp_month: value.edate.split("-")[1],
      exp_day: value.edate.split("-")[2],
      holdername: value.holdername,
    };

    console.log(data);

    axios
      .put("http://localhost:5000/api/v1/job/card", data, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
  const formatCardNumber = (e) => {
    // add space every 4 characters
    //check if it is a number
    if (isNaN(e.target.value.replaceAll(" ", ""))) {
      return;
    }
    const cardNumber = e.target.value.replace(/\s/g, "");
    const cardNumberWithSpaces =
      cardNumber.length < 16
        ? cardNumber.replace(/(.{4})/g, "$1 ")
        : cardNumber.replace(/(.{4})/g, "$1 ").trim();
    setValue({ ...value, [e.target.name]: cardNumberWithSpaces });
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
          handleChange={formatCardNumber}
          value={value.cardnumber}
          name={"cardnumber"}
          label={"Card Number"}
          // type={"number"}
          maxLength={19}
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

        <button className="btn-submit" onClick={handleSubmit}>
          submit
        </button>
      </form>
    </Wrapper>
  );
};

export default ViewCardPage;
