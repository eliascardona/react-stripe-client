import React, { useEffect, useRef, useState } from "react"
import { auth, functions } from "../../base"
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js"

export const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const currentUser = auth.currentUser
  const accessRef = useRef()
  const setPremiumUser = functions.httpsCallable("setPremiumUser")
  
  useEffect(() => {
    if (!stripe) {
      return
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setPremiumUser({ email: currentUser.email }).then(res => { 
            setMessage(`Payment succeeded`)
          })
          accessRef.current.style.display="block"
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000",
        payment_method_data: {
          billing_details: {
            email: currentUser.email
          }
        }
      },
    });
    
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }
    setIsLoading(false);
  }

  const redirectToCourse = () => {
    window.location.replace("/app")
  }

  return (
   <div className="m-1">
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      <button disabled={isLoading || !stripe || !elements} id="submit" className="btn mt-1" 
      style={{color:'#fff', backgroundColor:'#ff414d'}}>
        Pay now
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message" className="mt-1">{message}</div>}
      <button className="btn btn-sm mt-1" ref={accessRef} onClick={redirectToCourse} 
      style={{color:'#fff', backgroundColor:'#ff414d', display:'none'}}>
        Access to the course
      </button>
    </form>
   </div> 
  )
}