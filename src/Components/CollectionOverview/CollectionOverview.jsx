import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../Redux/Shop/shop.selector";
import Preview from "../Preview/Preview";
import "./CollectionOverview.styles.scss";

function CollectionOverview({ collections }) {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionProps }) => {
        return (
          <Preview
            key={id}
            {...otherCollectionProps}
          />
        )
      })}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);