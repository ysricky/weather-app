// Get location either from user input field or from user geolocation

import getWeather from './getWeather';
import { hideWeatherInfo, showAlert } from './displayData';

const inputField = document.querySelector('input');
const inputForm = document.querySelector('form');

const getCity = (keyword) => `q=${keyword}`;
const getVisitorLoc = (lat, lon) => `lat=${lat}&lon=${lon}`;

const success = (pos) => {
  const crd = pos.coords;

  getWeather(getVisitorLoc(crd.latitude, crd.longitude));
};

const error = () => {
  hideWeatherInfo();
  showAlert();
};

const getLocation = () => {
  navigator.geolocation.getCurrentPosition(success, error);
};

export { inputField, inputForm, getLocation, getCity };
