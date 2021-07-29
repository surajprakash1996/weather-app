import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { currentWeatherAction  } from "../creators/currentWeather.action";
import { pollutionAction } from '../creators/pollution.action';

import CurrentComponent from "../layouts/Current.component";

const CurrentController = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if(props.isLocationFetched) {
      dispatch(currentWeatherAction());
      dispatch(pollutionAction());
    }
  }, [props.isLocationFetched]);
  return (
    <CurrentComponent
      isFetched={props.isCurrentWeatherFetched}
      current={props.currentWeatherState}
      isPollutionFetched={props.isAirPollutionFetched}
      pollution={props.airPollutionState}
    />
  );
};
const mapStateToProps = (state) => ({
  isCurrentWeatherFetched: state.currentWeather.isCurrentWeatherFetched,
  currentWeatherState: state.currentWeather.currentWeather,
  isLocationFetched: state.location.isLocationFetched,
  isAirPollutionFetched: state.airPollution.isAirPollutionFetched,
  airPollutionState: state.airPollution.airPollutionWeather
});



export default connect(mapStateToProps, null)(CurrentController);
