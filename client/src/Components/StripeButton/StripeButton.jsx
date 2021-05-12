import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

function StripeCheckoutButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_51IhSVgB54jOSmuZ7WgJXTIbAXAYTrdlfS1czeeQAsWjD9ci5BW70q8UXOQRkOrrvHh3dcxn7zHsF2k85zWtaofkW005gVtLRY6";

  const onToken = token => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert("Payment was successful");
    }).catch(error => {
      console.log("Payment error: ", JSON.parse(error));
      alert("There was an issue with your payment. Please make sure you use the provided credit card.");
    })
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="AnG Store"
      billingAddress
      shippingAddress
      //image
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;