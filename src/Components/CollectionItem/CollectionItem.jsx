import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./CollectionItem.styles.scss";

function CollectionItem({id, name, price, imageUrl}) {
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
      <CustomButton>Add to Cart</CustomButton>
    </div>

  )
}

export default CollectionItem;