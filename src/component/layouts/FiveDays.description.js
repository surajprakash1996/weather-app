import React from "react";
import { getWeekName, meterToKilometer, timeStamp } from "../../util";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    border: "1px solid black",
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    flexGrow: "1",
  },
  icon: {
    height: "200px",
    width: "170px",
  },
}));

const FiveDaysDescription = ({ data }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container item xl={12} className={classes.root}>
        <Grid item xs={12}>
          <Typography variant="overline">Weather Will Be On</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">{getWeekName(data.dt)}</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          container
          component={Box}
          display="flex"
          direction="row"
          spacing={1}
        >
          <Grid item xs={4} container display="flex" direction="column">
            <Typography variant="body1">
              Max temp : {Math.floor(data.temp.max)}
            </Typography>
            <Typography variant="body1">
              Min temp : {Math.floor(data.temp.min)}
            </Typography>
          </Grid>
          <Grid item xs={4} container display="flex" direction="column">
            <Typography variant="body1">
              Sunrise : {timeStamp(data.sunrise)}
            </Typography>
            <Typography variant="body1">
              sunset : {timeStamp(data.sunset)}
            </Typography>
          </Grid>
          <Grid item xs={4} container display="flex" direction="column">
            <Typography variant="body1">
              Humidity : {data.humidity} {`%`}
            </Typography>
            <Typography variant="body1">
              Wind : {meterToKilometer(data.wind_speed)} {`km/h`}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default FiveDaysDescription;
