import { all } from "redux-saga/effects";
import { homepageSaga } from "./App/features/Homepage/homepageSaga";

export default function* saga() {
  yield all([homepageSaga()]);
}