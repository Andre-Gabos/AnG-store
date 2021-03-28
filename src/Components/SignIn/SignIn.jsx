import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import { SignInWithGoogle } from "../../Firebase/firebase.utils";
import "./SignIn.styles.scss";

function SingIn() {
  const [{ email, password }, setInfo] = useState({
    email: "",
    password: ""
  })

  function handleClick(event) {
    setInfo({
      email: "",
      password: ""
    })

    event.preventDefault();
  }

  function handleChange(event) {
    const { value, name } = event.target;

    setInfo((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      }
    });
  }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign In with your email and password</span>

      <form>
        <FormInput name="email" type="email" value={email} label="Email" change={handleChange} required />
        <FormInput name="password" type="password" value={password} label="Password" change={handleChange} required />

        <div className="buttons">
          <CustomButton type="submit" onClick={handleClick}>Sign in</CustomButton>
          <CustomButton onClick={handleClick} onClick={SignInWithGoogle} isGoogleSignIn >Sign in with Google</CustomButton>
        </div>

      </form>
    </div>
  )
}

export default SingIn;