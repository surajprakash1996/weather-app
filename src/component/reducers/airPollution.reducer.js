import {
  AIR_POLLUTION_WEATHER_FETCHING,
  AIR_POLLUTION_WEATHER_FETCHED,
  AIR_POLLUTION_WEATHER_FETCH_FAIL,
} from "../../constants.types";

const initialState = {
  isAirPollutionFetching: false,
  isAirPollutionFetched: null,
  airPollutionWeather: null,
};

const airPollutionReducer = (state = initialState, action) => {
  switch (action.type) {
    case AIR_POLLUTION_WEATHER_FETCHING:
      return {
        ...state,
        isAirPollutionFetching: true,
      };
    case AIR_POLLUTION_WEATHER_FETCHED:
      return {
        ...state,
        isAirPollutionFetching: false,
        isAirPollutionFetched: true,
        airPollutionWeather: action.payload,
      };
    case AIR_POLLUTION_WEATHER_FETCH_FAIL:
      return {
        isAirPollutionFetching: false,
        isAirPollutionFetched: null,
        airPollutionWeather: null,
      };
    default:
      return state;
  }
};

export default airPollutionReducer;
