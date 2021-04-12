import React from "react";
import "./CartItem.styles.scss";

function CartItem({ item: { imgUrl, price, name, quantity } }) {
  return (
    <div className="cart-item" >
      <img src={imgUrl}></img>
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">{quantity} x ${price}</span>
      </div>
    </div>
  )
}

export default CartItem;