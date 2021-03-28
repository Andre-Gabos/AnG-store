import React from "react";
import "./CustomButton.styles.scss";

function CustomButton({children, isGoogleSignIn, ...otherProps}) {

  const googleButton = isGoogleSignIn ? "google-signin" : "";

  return (
    <button className= {`${googleButton} custom-button`} {...otherProps}>
      {children}
    </button>
  )
}

export default CustomButton;