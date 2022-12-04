import React, { useState } from "react";
import { Labelinput, SingleInput } from "../../component/formcomponents";
import Wrapper from "./wrapper/PaymentPage";
import { BsFillBackspaceFill } from "react-icons/bs";
import { FaCcStripe } from "react-icons/fa";

const PaymentPage = () => {
  const [price, setPrice] = useState(0);

  return (
    <Wrapper className="glassmorphism">
      <div className="left-content">
        <div className="info">
          <div className=" backoptions">
            <BsFillBackspaceFill className="icon" />
            <h4>John Doe</h4>
          </div>
          <hr />
        </div>

        <div className="img-container glassmorphism">
          <img
            src="https://images.unsplash.com/photo-1620218690431-b02d9502a71e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
            alt=""
          />
        </div>
      </div>
      <div className="right-container">
        <form action="">
          <div className="info">
            <h5>Pay with Card</h5>
            <h1>$ {price}</h1>
          </div>
          <Labelinput label={"Email"} placeholder={"Enter you Email"} />
          <label htmlFor="">Card Number</label>
          <div className="payment-method">
            <input type="number" placeholder="XXXX-XXXX-XXXX-XXXX" />
            <FaCcStripe className="icon" />
          </div>
          <label htmlFor="">Expire Date</label>
          <div className="payment-method">
            <input type="number" placeholder="Expire Date" />
          </div>
          <Labelinput
            label={"Payment"}
            placeholder={"Enter Payment"}
            type={"number"}
            handleChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </form>

        <button>submit</button>
      </div>
    </Wrapper>
  );
};

export default PaymentPage;
