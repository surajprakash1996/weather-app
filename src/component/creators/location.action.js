import { LOCATION_FETCHED, LOCATION_FETCHED_FAIL} from "../../constants.types";
import {returnError, clearError} from './error.action';

export const fetchLocation = () => {
  return (dispatch) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        dispatch(clearError());
        dispatch({type:LOCATION_FETCHED, payload: {
          lat: position.coords.latitude.toFixed(2),
          lon: position.coords.longitude.toFixed(2)
        }})
      })
    } else {
      dispatch(returnError('Location Fetch Fail',401,'FETCH FAIL'))
      dispatch({type: LOCATION_FETCHED_FAIL });
    }
  }
}