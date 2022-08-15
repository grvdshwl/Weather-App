import { weatherActionTypes } from "./weather.types";

const INITIAL_STATE = {
  weatherData: null,
  hasLocationAccess: false,
  weatherLocationLoading: false,
  cityError: {
    state: false,
    city: null,
  },
};

export const weatherReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case weatherActionTypes.SAVE_WEATHER_DATA:
      return {
        ...state,
        weatherData: action.payload,
        hasLocationAccess: true,
        weatherLocationLoading: false,
        cityError: {
          state: false,
          city: null,
        },
      };
    case weatherActionTypes.LOCATION_ACCESS_DENIED:
      return {
        ...state,
        hasLocationAccess: false,
        weatherLocationLoading: false,
        cityError: {
          state: false,
          city: null,
        },
      };
    case weatherActionTypes.INITIALIZE_DATA:
      return { ...state, weatherLocationLoading: true };
    case weatherActionTypes.FETCH_CITY_WEATHER_ERROR:
      return { ...state, cityError: { state: true, city: action.payload } };
    default:
      return state;
  }
};
