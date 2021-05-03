import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../Assets/cap.svg";
import { auth } from "../../Firebase/firebase.utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../Redux/Cart/cart.selectors";
import { selectCurrentUser } from "../../Redux/User/user.selectors";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from "./Header.styles";

function Header({ currentUser, hidden }) {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">
          SHOP
        </OptionLink>
        <OptionLink to="/shop">
          CONTACT
        </OptionLink>
        {currentUser ?
          <OptionDiv onClick={() => { auth.signOut() }}>SIGN OUT</OptionDiv>
          :
          <OptionLink to="/signin" >SIGN IN</OptionLink>}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});



export default connect(mapStateToProps)(Header);