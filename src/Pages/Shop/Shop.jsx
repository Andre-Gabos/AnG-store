import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../Redux/Shop/shop.selector";
import Preview from "../../Components/Preview/Preview";


function Shop({ collections }) {
  return (
    <div className="shop-page">
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
  collections: selectCollections
})

export default connect(mapStateToProps)(Shop);