import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../Assets/cap.svg";
import { auth } from "../../Firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import "./Header.styles.scss";

function Header({ currentUser, hidden }) {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ?
          <div className="option" onClick={() => { auth.signOut() }}>SIGN OUT</div>
          :
          <Link className="option" to="/signin" >SIGN IN</Link>}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  )
}

function mapStateToProps({ user: { currentUser }, cart: { hidden } }) {
  return ({
    currentUser,
    hidden
  })
}

export default connect(mapStateToProps)(Header);