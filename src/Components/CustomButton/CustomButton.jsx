import React from "react";
import "./CustomButton.styles.scss";

function CustomButton({ children, isGoogleSignIn, inverted, ...otherProps }) {

  const invertedButton = inverted ? "inverted" : "";
  const googleButton = isGoogleSignIn ? "google-signin" : "";

  return (
    <button className={`${googleButton} ${invertedButton} custom-button`} {...otherProps}>
      {children}
    </button>
  )
}

export default CustomButton;