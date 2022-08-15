import { all, call, takeLatest, put } from "redux-saga/effects";
import {
  fetchCurrentPosition,
  getDate,
  kelvinToCelcius,
} from "../../../utils/utils";
import {
  handleCityWeatherError,
  handleLocationAccessRejection,
  saveWeatherData,
} from "./weather.action";
import { weatherActionTypes } from "./weather.types";

const API_KEY = process.env.REACT_APP_API_KEY;

export function* saveWeather(data) {
  const finalData = {
    name: data.name,
    last_updated: getDate(),
    temp: kelvinToCelcius(data.main.temp),
    feels_like: kelvinToCelcius(data.main.feels_like),
    icon: data.weather[0].icon,
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    temp_min: kelvinToCelcius(data.main.temp_min),
    temp_max: kelvinToCelcius(data.main.temp_max),
  };
  yield put(saveWeatherData(finalData));
}

export function* handleCityWeather({ payload }) {
  try {
    const apiData = yield fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=${API_KEY}`
    );

    const data = yield apiData.json();

    yield call(saveWeather, data);
  } catch (err) {
    yield put(handleCityWeatherError(payload));
  }
}

export function* handleLocationRejection() {
  yield put(handleLocationAccessRejection());
}

export function* handleLocationSuccess(currentPosition) {
  const { latitude, longitude } = currentPosition;

  const apiData = yield fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
  );

  const data = yield apiData.json();

  yield call(saveWeather, data);
}

export function* initializeData() {
  try {
    const currentPosition = yield fetchCurrentPosition();
    yield call(handleLocationSuccess, currentPosition);
  } catch (err) {
    yield call(handleLocationRejection);
  }
}

export function* initializeWeather() {
  yield takeLatest(weatherActionTypes.INITIALIZE_DATA, initializeData);
}

export function* fetchWeather() {
  yield takeLatest(weatherActionTypes.FETCH_CITY_WEATHER, handleCityWeather);
}

export function* weatherSaga() {
  yield all([call(initializeWeather), call(fetchWeather)]);
}
