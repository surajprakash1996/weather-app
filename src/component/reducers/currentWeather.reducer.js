import {
    CURRENT_WEATHER_FETCHING,
    CURRENT_WEATHER_FETCHED,
    CURRENT_WEATHER_FETCH_FAIL,
  } from "../../constants.types";

  const initialState = {
    isCurrentWeatherFetching: false,
    isCurrentWeatherFetched: null,
    currentWeather: null,
  };
  
  const currentWeatherReducer = (state = initialState, action) => {
    switch (action.type) {
      case CURRENT_WEATHER_FETCHING:
        return {
          ...state,
          isCurrentWeatherFetching: true,
        };
      case CURRENT_WEATHER_FETCHED:
        return {
          ...state,
          isCurrentWeatherFetching: false,
          isCurrentWeatherFetched: true,
          currentWeather: action.payload,
        };
      case CURRENT_WEATHER_FETCH_FAIL:
        return {
            isCurrentWeatherFetching: false,
            isCurrentWeatherFetched: null,
            currentWeather: null,
        };
      default:
        return state;
    }
  };
  
  export default currentWeatherReducer;
  