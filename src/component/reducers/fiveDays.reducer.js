import {
    FIVE_DAYS_WEATHER_FETCHING,
    FIVE_DAYS_WEATHER_FETCHED,
    FIVE_DAYS_WEATHER_FETCH_FAIL,
  } from "../../constants.types";
  

  const initialState = {
    isFiveDaysWeatherFetching: false,
    isFiveDaysWeatherFetched: null,
    fiveDaysWeather: null,
  };
  
  const fiveDaysReducer = (state = initialState, action) => {
    switch (action.type) {
      case FIVE_DAYS_WEATHER_FETCHING:
        return {
          ...state,
          isFiveDaysWeatherFetching: true,
        };
      case FIVE_DAYS_WEATHER_FETCHED:
        return {
          ...state,
          isFiveDaysWeatherFetching: false,
          isFiveDaysWeatherFetched: true,
          fiveDaysWeather: action.payload,
        };
      case FIVE_DAYS_WEATHER_FETCH_FAIL:
        return {
            isFiveDaysWeatherFetching: false,
            isFiveDaysWeatherFetched: null,
            fiveDaysWeather: null,
        };
      default:
        return state;
    }
  };
  
  export default fiveDaysReducer;
  