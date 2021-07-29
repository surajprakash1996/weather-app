import React from 'react'
import { makeStyles } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import { lastUpdate } from '../../util';
import CurrentWeathetDecriptionTable from './CurrentWeatherDescriptionTable'
import PinDropIcon from '@material-ui/icons/PinDrop';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    backgroundColor: grey[50],
  },
  icon: {
    height: '200px',
    width: '170px'
  },
  location: {
    height: '25px',
    width: '25px'
  }
}))

const CurrentComponent = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {
        !props.isFetched || !props.isPollutionFetched ? <h4>Loading...</h4> : (
          <Grid component={Box} container>
            <Grid item xs={12}>
              <Typography variant="overline">Current Weather</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5"><PinDropIcon className={classes.location} /> {props.current.cityName},{props.current.countryName}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">{lastUpdate()}</Typography>
            </Grid>
            <Grid item xs={12} container >
              <Grid item xs={2}>
                <Avatar src={` http://openweathermap.org/img/wn/${props.current.weatherIcon}.png`} className={classes.icon} />
              </Grid>
              <Grid item xs={2} container component={Box} display="flex" direction="column" alignItems="flex-start" justifyContent="center">
                <Typography variant="h3">{Math.round(props.current.currentTemp)}&#176;<sup>c</sup></Typography>
                <Typography variant="h6">{props.current.weatherMain}</Typography>
              </Grid>

              <Grid item xs={12}>
                <CurrentWeathetDecriptionTable current={props.current} pollution={props.pollution} />
              </Grid>
            </Grid>
          </Grid>
        )
      }
    </div>
  )
}

export default CurrentComponent;

