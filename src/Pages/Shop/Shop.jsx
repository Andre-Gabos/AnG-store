import React, { useState } from "react";
import shopData from "./shop.data.js";
import Preview from "../../Components/Preview/Preview";


function Shop() {
  const [collections, setCollections] = useState(shopData);
  
  return (
    <div className="shop-page">
      {collections.map(({id, ...otherCollectionProps}) => {
        return(
        <Preview 
          key={id}
          {...otherCollectionProps}
        />
      )})}
    </div>
  )
}

export default Shop;