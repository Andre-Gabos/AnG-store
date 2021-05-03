import React from "react";
import "./CustomButton.styles.scss";
import { CustomButtonContainer } from "./CustomButton.styles";

function CustomButton({ children, ...props }) {

  return (
    <CustomButtonContainer {...props}>
      {children}
    </CustomButtonContainer>
  )
}

export default CustomButton;