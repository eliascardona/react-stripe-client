import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "./CheckoutForm";
const stripePromise = loadStripe("pk_test_51HLuLEEQnDpGECUPnl9GKoHt8ZNJH8Go4Zi9pYcijAmFxA4KZjmvN91utZo9AP6k5GOcc7qXkLSZJSJLnFcydrnV00ENOWMq0h");

export const PaymentForm = () => {
  const [clientSecret, setClientSecret] = useState("");
  
  useEffect(() => {
    fetch("/create-payment-intent", {
      mode: "cors",
      method: "POST",
      credentials: "include"
    }).then((res) => res.json()).then((data) => setClientSecret(data.clientSecret));

  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <>
      {clientSecret && (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
      )}
    </> 
  )
}