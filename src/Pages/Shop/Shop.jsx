import React from "react";
import { Route } from 'react-router-dom';
import { connect } from "react-redux";
import { updateCollections } from "../../Redux/Shop/shop.actions";
import { firestore, convertCollectionsSnapshotToMap } from "../../Firebase/firebase.utils";
import CollectionOverview from "../../Components/CollectionOverview/CollectionOverview";
import Collection from "../Collection/Collection";
import WithSpinner from "../../Components/WithSpinner/WithSpinner";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(Collection);

class Shop extends React.Component {
  state = {
    loading: true
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collection");

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />} />
        <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
      </div>
    )
  }

};

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})


export default connect(null, mapDispatchToProps)(Shop);