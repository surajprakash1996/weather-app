import React, { useEffect } from "react";
import Maincomponent from "./Main.component";

import { fetchLocation } from "./component/creators/location.action";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";

const App = ({ isLocationFetched }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLocation());
  }, [isLocationFetched]);

  return (
    <div>
      <Maincomponent />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLocationFetched: state.location.isLocationFetched,
});

export default connect(mapStateToProps, null)(App);
