import React, { useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import { fiveDaysWeatherAction } from "../creators/FiveDaysWeather.action";

import FiveDaysWeatherComponent from "../layouts/FiveDays.component";

const FiveDaysController = ({
  isFiveDaysWeatherFetched,
  fiveDaysWeather,
  isLocationFetched,
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fiveDaysWeatherAction());
  }, [isLocationFetched]);
  return (
    <FiveDaysWeatherComponent
      isFiveDaysWeatherFetched={ isFiveDaysWeatherFetched }
      fiveDaysWeather={ fiveDaysWeather }
    />
  );
};

const mapStateToProps = (state) => ({
  isFiveDaysWeatherFetched: state.fiveDaysWeather.isFiveDaysWeatherFetched,
  fiveDaysWeather: state.fiveDaysWeather.fiveDaysWeather,
  isLocationFetched: state.location.isLocationFetched,
});

export default connect(mapStateToProps, null)(FiveDaysController);
