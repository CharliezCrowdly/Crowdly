import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51MIaOSSGpLd70Ol3BTaOQ6lrTTsx4IYlEenUlJkgYG6oLGlfeAoerMTauCXeJinMkle4bUs5JExFeDdyaFzr4C8y00UKleJPzI";
const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <div style={{ height: "100vh" }}>
      <Elements stripe={stripeTestPromise}>
        <PaymentForm />
      </Elements>
    </div>
  );
}
