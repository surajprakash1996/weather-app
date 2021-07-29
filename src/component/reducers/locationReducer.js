import {
    LOCATION_FETCHING,
    LOCATION_FETCHED,
    LOCATION_FETCHED_FAIL,
  } from "../../constants.types";
  
  

  const initialState = {
    isLocationFetching: false,
    isLocationFetched: null,
    geolocation: null,
  };
  
  const locationReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOCATION_FETCHING:
        return {
          ...state,
          isLocationFetching: true,
        };
      case LOCATION_FETCHED:
        return {
          ...state,
          isLocationFetching: false,
          isLocationFetched: true,
          geolocation: action.payload,
        };
      case LOCATION_FETCHED_FAIL:
        return {
            isLocationFetching: false,
            isLocationFetched: null,
            geolocation: null,
        };
      default:
        return state;
    }
  };
  
  export default locationReducer;
  