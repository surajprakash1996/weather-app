import { combineReducers } from 'redux'

import locationReducer from './component/reducers/locationReducer';
import fiveDaysReducer from './component/reducers/fiveDays.reducer';
import errorReducer from './component/reducers/error.reducer';
import currentWeatherReducer from './component/reducers/currentWeather.reducer';
import airPollutionReducer from './component/reducers/airPollution.reducer';


const rootReducer = combineReducers({
    currentWeather: currentWeatherReducer,
    fiveDaysWeather: fiveDaysReducer,
    airPollution: airPollutionReducer,
    error:errorReducer,
    location:locationReducer
})

export default rootReducer;