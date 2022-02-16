import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga";
import projectsReducer from "./projectsSlice"
import { repositoriesSaga } from "./saga";

const sagaMidlleware = createSagaMiddleware();

export const store = configureStore({
  reducers: {
    projects: projectsReducer,
  },
  middleware: [sagaMidlleware],
})

sagaMidlleware.run(repositoriesSaga);
