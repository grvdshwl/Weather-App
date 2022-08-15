import { weatherActionTypes } from "./weather.types";

export const saveWeatherData = (data) => ({
  type: weatherActionTypes.SAVE_WEATHER_DATA,
  payload: data,
});

export const initializeData = () => ({
  type: weatherActionTypes.INITIALIZE_DATA,
});

export const handleLocationAccessRejection = () => ({
  type: weatherActionTypes.LOCATION_ACCESS_DENIED,
});

export const fetchCityWeather = (data) => ({
  type: weatherActionTypes.FETCH_CITY_WEATHER,
  payload: data,
});

export const handleCityWeatherError = (data) => ({
  type: weatherActionTypes.FETCH_CITY_WEATHER_ERROR,
  payload: data,
});
