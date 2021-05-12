import React from "react";
import SignIn from "../../Components/SignIn/SignIn";
import SignUp from "../../Components/SignUp/SignUp";
import "./Signpage.styles.scss";

function Signpage() {
  return (
    <div className="sign">
      <SignIn />
      <SignUp />
    </div>
  )
}

export default Signpage;