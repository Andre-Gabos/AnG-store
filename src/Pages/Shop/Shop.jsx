import React from "react";
import { Route } from 'react-router-dom';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { fetchCollectionsStartAsync, selectIsCollectionsLoaded } from "../../Redux/Shop/shop.actions";
import { selectIsCollectionFetching } from "../../Redux/Shop/shop.selector";
import CollectionOverview from "../../Components/CollectionOverview/CollectionOverview";
import Collection from "../Collection/Collection";
import WithSpinner from "../../Components/WithSpinner/WithSpinner";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(Collection);

class Shop extends React.Component {

  componentDidMount() {

    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync

    //const collectionRef = firestore.collection("collection");

    //API call using promisse + firebase.
    // collectionRef.get().then(snapshot => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // });

    //Database access through Firebase methods, using observer pattern.
    // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(snapshot => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // });

    //More common fetch pattern example, without accessing the necessary data to be displayed.
    // fetch("https://firestore.googleapis.com/v1/projects/ang-clothing/databases/(default)/documents/collection")
    //   .then(response => response.json())
    //   .then(collection => console.log(collection))
  }

  render() {
    const { match, isCollectionFetching, isCollectionsLoaded } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact path={`${match.path}`}
          render={(props) =>
            <CollectionOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          }
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) =>
            <CollectionPageWithSpinner
              isLoading={!isCollectionsLoaded}
              {...props}
            />
          }
        />
      </div>
    )
  }

};

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});


export default connect(mapStateToProps, mapDispatchToProps)(Shop);