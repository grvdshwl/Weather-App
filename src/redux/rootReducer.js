import { combineReducers } from "@reduxjs/toolkit";
import { weatherReducer } from "./reducer/weather/weather.reducer";

export const rootReducer = combineReducers({ weather: weatherReducer });
