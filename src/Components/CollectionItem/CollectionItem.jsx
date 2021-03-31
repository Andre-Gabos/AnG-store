import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../Redux/Cart/cart.actions";
import CustomButton from "../CustomButton/CustomButton";
import "./CollectionItem.styles.scss";

function CollectionItem({ item, addItem }) {
  const { name, price, imageUrl } = item;

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => {addItem(item)}} >Add to Cart</CustomButton>
    </div>

  )
}

function mapDispatchToProps(dispatch) {
  return {
    addItem: (item) => dispatch(addItem(item))
  }
}

export default connect(null, mapDispatchToProps)(CollectionItem);