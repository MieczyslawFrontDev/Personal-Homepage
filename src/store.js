import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { themeReducer } from "./App/common/ThemeSwitch/themeSlice";
import { homepageReducer } from "./App/features/Homepage/homepageSlice";
import saga from "./saga";


const sagaMidlleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    homepage: homepageReducer,
    theme: themeReducer,
  },
  middleware: [sagaMidlleware],
})

sagaMidlleware.run(saga);
