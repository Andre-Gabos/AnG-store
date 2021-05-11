import React, { useState } from "react";
import { connect } from "react-redux";
import { googleSignInStart, emailSignInStart } from "../../Redux/User/user.actions";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import "./SignIn.styles.scss";

function SingIn(props) {
  const [{ email, password }, setInfo] = useState({
    email: "",
    password: ""
  })

  async function handleSubmit(event) {
    event.preventDefault();
    const { emailSignInStart } = props;

    emailSignInStart(email, password);
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

  const { googleSignInStart } = props;

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign In with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput name="email" type="email" value={email} label="Email" change={handleChange} required />
        <FormInput name="password" type="password" value={password} label="Password" change={handleChange} required />

        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn >Sign in with Google</CustomButton>
        </div>

      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SingIn);