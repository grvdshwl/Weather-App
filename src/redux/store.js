import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./rootReducer";
import { rootSagas } from "./rootsaga";
import logger from "redux-logger";

const saga = createSagaMiddleware();

const middlewares = [saga, logger];

export const store = configureStore({
  middleware: middlewares,
  reducer: rootReducer,
});

saga.run(rootSagas);
