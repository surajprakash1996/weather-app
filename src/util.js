import { key } from "./config";

export const meterToKilometer = (value) => {
  let val = parseInt(value);
  return (val * 18) / 5;
};

export const lastUpdate = () => {
  var d = new Date();
  var n = d.toLocaleTimeString();
  return n;
};

export const timeStamp = (val) => {
  var newDate = new Date(parseInt(val) * 1000);
  var n = newDate.toLocaleTimeString();
  return n;
};

export const aqiLevel = (val) => {
  switch (val) {
    case 1:
      return "Good";
      break;
    case 2:
      return "Fair";
      break;
    case 3:
      return "Moderate";
      break;
    case 4:
      return "Poor";
      break;
    case 5:
      return "Very Poor";
      break;
    default:
      return false;
  }
};

export const currentWeatherUrl = (lat, lon) => {
  return `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${key}`;
};

export const pollutionUrl = (lat, lon) => {
  return `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&units=metric&appid=${key}`;
};

export const fiveDaysWeatherUrl = (lat, lon) => {
  return `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${key}`;
};

export const getWeekName = (val) => {
  switch (new Date(val * 1000).getDay()) {
    case 0:
      return "Sunday";
      break;
    case 1:
      return "Monday";
      break;
    case 2:
      return "Tuesday";
      break;
    case 3:
      return "Wednesday";
      break;
    case 4:
      return "Thursday";
      break;
    case 5:
      return "Friday";
      break;
    case 6:
      return "Saturday";
      break;
    default:
      return false;
  }
};
