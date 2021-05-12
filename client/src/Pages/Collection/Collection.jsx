import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../Redux/Shop/shop.selector";
import CollectionItem from "../../Components/CollectionItem/CollectionItem";
import "./Collection.styles.scss";

function Collection({ collection }) {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => {
          return (
            <CollectionItem 
              key={item.id}
              item={item}
            />
          )
        })}
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection);