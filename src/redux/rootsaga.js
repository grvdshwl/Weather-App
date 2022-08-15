import { all, call } from "redux-saga/effects";
import { weatherSaga } from "./reducer/weather/weather.saga";

export function* rootSagas() {
  yield all([call(weatherSaga)]);
}
