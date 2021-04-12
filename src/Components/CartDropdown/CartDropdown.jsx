import React from "react";
import { connect } from "react-redux";
import CustomButton from "../CustomButton/CustomButton";
import CartItem from "../CartItem/CartItem";
import "./CartDropdown.styles.scss";

function CartDropdown() {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

export default CartDropdown;