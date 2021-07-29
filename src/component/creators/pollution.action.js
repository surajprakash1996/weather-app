import { AIR_POLLUTION_WEATHER_FETCHED, AIR_POLLUTION_WEATHER_FETCH_FAIL } from "../../constants.types";

import Axios from 'axios';
import {pollutionUrl} from '../../util'
import {returnError, clearError} from './error.action';

export const pollutionAction = () => {
  return async(dispatch, getState) => {
    const geolocation = getState().location.geolocation;
    try {
      const res = await Axios.get(pollutionUrl(geolocation.lat, geolocation.lon));
      console.log(res.data);
      dispatch(clearError());
      dispatch({type:AIR_POLLUTION_WEATHER_FETCHED, payload: {
          AQI: res.data.list[0].main.aqi,
          pm2_5: res.data.list[0].components.pm2_5,
          pm10: res.data.list[0].components.pm10
      }})
    } catch (err) {
        dispatch(returnError('Current Weather',401,'FETCH FAIL'))
        dispatch({type: AIR_POLLUTION_WEATHER_FETCH_FAIL });
    }
  }
}