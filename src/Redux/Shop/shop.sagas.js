import { takeEvery, call, put, takeLatest } from "redux-saga/effects";
import { firestore, convertCollectionsSnapshotToMap } from "../../Firebase/firebase.utils";
import { fetchCollectionsSuccess, fetchCollectionsFailure } from "./shop.actions";
import ShopActionTypes from "./shop.types";

export function* fetchCollectionAsync() {
  yield console.log("something");

  try {
    const collectionRef = firestore.collection("collection");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));

  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionStart() {
  yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionAsync)
}