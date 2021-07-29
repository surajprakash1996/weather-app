import React from 'react'
import CurrentComponentController from './component/controllers/Current.controller';
import FiveDaysComponentController from './component/controllers/FiveDays.controller';
import grey from '@material-ui/core/colors/grey';
import {makeStyles} from '@material-ui/core';
import {Box} from '@material-ui/core';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: grey[200],
    padding: theme.spacing(5)
  }
}))

const Maincomponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container component={Box} spacing={3}>
        <Grid item xs={12}>
          <CurrentComponentController/>
        </Grid>
        <Grid item xs={12}>
          <FiveDaysComponentController/>
        </Grid>
      </Grid>
    </div>
  )
}

export default Maincomponent;
