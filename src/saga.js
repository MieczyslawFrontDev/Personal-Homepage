import { call, delay, put, takeLatest } from "redux-saga/effects";
import {
  axiosRepos,
  axiosReposError,
  axiosReposSuccess,
} from "./App/projectsSlice";
import { getRepositoriesFromApi } from "./App/getReposFromApi";

function* axiosRepositoriesWorker() {
  try {
    yield delay(2000);
    const repositories = yield call(getRepositoriesFromApi);
    yield put(axiosReposSuccess(repositories));
    console.log(repositories);
  } catch (error) {
    yield put(axiosReposError());
  }
}

export function* repositoriesSaga() {
  console.log("saga jest podłączona");
  yield takeLatest(axiosRepos.type, axiosRepositoriesWorker);
}
