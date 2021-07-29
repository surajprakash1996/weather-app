import React from 'react'
import FiveDaysWeatherDescription from '../layouts/FiveDays.description';
import { makeStyles } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    backgroundColor: grey[50],
  },
  weather: {
    display: 'flex',
    flexGrow: '1',
  }
}))

const FiveDaysComponent = ({ isFiveDaysWeatherFetched, fiveDaysWeather }) => {
  const classes = useStyles();
  return (
    <div className={classes.root} >
      <Grid container component={Box} className={classes.weather} >
        {
          !isFiveDaysWeatherFetched ? <h4>Loading...</h4> : (
            fiveDaysWeather.weather.map((data, index) => (
              <FiveDaysWeatherDescription data={data} key={index} />
            ))
          )
        }
      </Grid>
    </div>
  )
}

export default FiveDaysComponent;
