import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import { auth, SignInWithGoogle } from "../../Firebase/firebase.utils";
import "./SignIn.styles.scss";

function SingIn() {
  const [{ email, password }, setInfo] = useState({
    email: "",
    password: ""
  })

  async function handleSubmit(event) {
    event.preventDefault();
    
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setInfo({
        email: "",
        password: ""
      })
    } catch (error) {
      console.error(error);
    }
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

      <form onSubmit={handleSubmit}>
        <FormInput name="email" type="email" value={email} label="Email" change={handleChange} required />
        <FormInput name="password" type="password" value={password} label="Password" change={handleChange} required />

        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton type="button" onClick={SignInWithGoogle} isGoogleSignIn >Sign in with Google</CustomButton>
        </div>

      </form>
    </div>
  )
}

export default SingIn;