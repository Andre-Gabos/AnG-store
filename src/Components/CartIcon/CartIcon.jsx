import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../Redux/Cart/cart.actions";
import { ReactComponent as ShoppingIcon } from "../../Assets/shopping-bag.svg";
import "./CartIcon.styles.scss";

function CartIcon({ toggleCartHidden, itemCount }) {
  return (
    <div className="cart-icon" onClick={toggleCartHidden} >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count" >{itemCount}</span>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden())
  }
}

function mapStateToProps({ cart: { cartItems } }) {
  return {
    itemCount: cartItems.reduce((accumulatedQuantity, cartItem) => {
      return accumulatedQuantity + cartItem.quantity
    }, 0)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);