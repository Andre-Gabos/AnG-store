import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../Redux/Cart/cart.actions";
import { ReactComponent as ShoppingIcon } from "../../Assets/shopping-bag.svg";
import "./CartIcon.styles.scss";

function CartIcon({ toggleCartHidden }) {
  return (
    <div className="cart-icon" onClick={toggleCartHidden} >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count" >0</span>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden())
  }
}

export default connect(null, mapDispatchToProps)(CartIcon);