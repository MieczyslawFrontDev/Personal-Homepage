import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import homepageReducer from "./App/features/Homepage/homepageSlice"
import saga from "./saga";


const sagaMidlleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    homepage: homepageReducer,
  },
  middleware: [sagaMidlleware],
})

sagaMidlleware.run(saga);
