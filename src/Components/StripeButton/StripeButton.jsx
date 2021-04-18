import React from "react";
import StripeCheckout from "react-stripe-checkout";

function StripeCheckoutButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_51IhSVgB54jOSmuZ7WgJXTIbAXAYTrdlfS1czeeQAsWjD9ci5BW70q8UXOQRkOrrvHh3dcxn7zHsF2k85zWtaofkW005gVtLRY6";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful!")
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="AnG Store"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/en/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;