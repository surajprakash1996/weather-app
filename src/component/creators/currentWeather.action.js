import { CURRENT_WEATHER_FETCHED, CURRENT_WEATHER_FETCH_FAIL} from "../../constants.types";
import Axios from 'axios';
import {currentWeatherUrl} from '../../util'
import {returnError, clearError} from './error.action';

export const currentWeatherAction = () => {
  return async(dispatch, getState) => {
    const geolocation = getState().location.geolocation;
    try {
      const res = await Axios.get(currentWeatherUrl(geolocation.lat, geolocation.lon));
      dispatch(clearError());
      dispatch({type:CURRENT_WEATHER_FETCHED, payload: {
        currentTemp: res.data.main.temp,
        humdityTemp: res.data.main.humidity,
        maxTemp: res.data.main.temp_max,
        minTemp: res.data.main.temp_min,
        cityName: res.data.name,
        weatherIcon: res.data.weather[0].icon,
        weatherMain: res.data.weather[0].main,
        sunRise: res.data.sys.sunrise,
        sunSet: res.data.sys.sunset,
        windSpeed: res.data.wind.speed,
        countryName: res.data.sys.country
      }})
    } catch (err) {
        dispatch(returnError('Current Weather',401,'FETCH FAIL'))
        dispatch({type: CURRENT_WEATHER_FETCH_FAIL });
    }
  }
}