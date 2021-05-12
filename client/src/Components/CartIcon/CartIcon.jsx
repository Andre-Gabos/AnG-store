import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../Redux/Cart/cart.actions";
import { selectCartItemsCount } from "../../Redux/Cart/cart.selectors";
import { createStructuredSelector } from "reselect";
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

const mapStateToProps = createStructuredSelector ({
    itemCount: selectCartItemsCount
  });


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);