import { FIVE_DAYS_WEATHER_FETCHED, FIVE_DAYS_WEATHER_FETCH_FAIL } from "../../constants.types";

import Axios from 'axios';
import {fiveDaysWeatherUrl} from '../../util'
import {returnError, clearError} from './error.action';

export const fiveDaysWeatherAction = () => {
  return async(dispatch, getState) => {
    const geolocation = getState().location.geolocation;
    try {
      const res = await Axios.get(fiveDaysWeatherUrl(geolocation.lat, geolocation.lon));
      dispatch(clearError());
      dispatch({type:FIVE_DAYS_WEATHER_FETCHED, payload: {
        weather: res.data.daily.slice(1,6)
      }})
    } catch (err) {
        dispatch(returnError('Five Day Error',401,'FETCH FAIL'))
        dispatch({type: FIVE_DAYS_WEATHER_FETCH_FAIL });
    }
  }
}