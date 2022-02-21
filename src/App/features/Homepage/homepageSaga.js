import { call, delay, put, takeLatest } from "redux-saga/effects";
import {
  axiosGetRepositories,
  axiosGetRepositoriesError,
  axiosGetRepositoriesSuccess,
} from "./homepageSlice";
import { getRepositoriesFromApi } from "./homepageAPI";

function* axiosRepositoriesWorker() {
  try {
    yield delay(2000);
    const repositories = yield call(getRepositoriesFromApi);
    yield put(axiosGetRepositoriesSuccess(repositories));
    console.log(repositories);
  } catch (error) {
    yield put(axiosGetRepositoriesError());
  }
}

export function* homepageSaga() {
  yield takeLatest(axiosGetRepositories.type, axiosRepositoriesWorker);
}
