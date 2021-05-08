import { all, call } from "redux-saga/effects";
import { fetchCollectionStart } from "./Shop/shop.sagas";

export default function* rootSaga() {
  yield all([call(fetchCollectionStart)]);
}