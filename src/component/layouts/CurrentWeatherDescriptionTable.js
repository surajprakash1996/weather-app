import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { timeStamp, meterToKilometer } from "../../util";
import TableHead from "@material-ui/core/TableHead";
import Typography from "@material-ui/core/Typography";

import { aqiLevel } from "../../util";

export default function CurrentWeatherDescriptionTable(props) {
  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Sunrise</TableCell>
            <TableCell align="center">Sunset</TableCell>
            <TableCell align="center">Humidity</TableCell>
            <TableCell align="center">Wind Speed</TableCell>
            <TableCell align="center">Max Temp</TableCell>
            <TableCell align="center">Min Temp</TableCell>
            <TableCell align="center">AQI(Level)</TableCell>
            <TableCell align="center">PM2.5</TableCell>
            <TableCell align="center">PM10</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="center">
              {timeStamp(props.current.sunRise)}
            </TableCell>
            <TableCell align="center">
              {timeStamp(props.current.sunSet)}
            </TableCell>
            <TableCell align="center">
              {props.current.humdityTemp}
              {`%`}
            </TableCell>
            <TableCell align="center">
              {meterToKilometer(props.current.windSpeed)} {`km/h`}
            </TableCell>
            <TableCell align="center">
              {Math.round(props.current.maxTemp)}&#176;<sup>c</sup>
            </TableCell>
            <TableCell align="center">
              {Math.round(props.current.minTemp)}&#176;<sup>c</sup>
            </TableCell>
            <TableCell align="center">
              {aqiLevel(props.pollution.AQI)}
            </TableCell>
            <TableCell align="center">
              {Math.round(props.pollution.pm2_5)}
            </TableCell>
            <TableCell align="center">
              {Math.round(props.pollution.pm10)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
