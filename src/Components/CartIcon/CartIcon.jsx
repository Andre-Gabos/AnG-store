import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../Redux/Cart/cart.actions";
import { selectCartItemsCount } from "../../Redux/Cart/cart.selectors";
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

function mapStateToProps(state) {
  return {
    itemCount: selectCartItemsCount(state)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);