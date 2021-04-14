import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../Redux/Shop/shop.selector";
import CollectionItem from "../../Components/CollectionItem/CollectionItem";
import "./Collection.styles.scss";

function Collection({ collection }) {
  return (
    <div className="collection-page">
      <h2>COLLECTION PAGE</h2>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection);