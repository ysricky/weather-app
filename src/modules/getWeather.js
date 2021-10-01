import {
  displayWeatherInfo,
  hideWeatherInfo,
  unhideWeatherInfo,
  hideAlert,
  showAlert,
} from './displayData';
import { showSpinner, hideSpinner } from './spinner';

const getWeather = async (callback) => {
  let success = true;
  try {
    hideAlert();
    hideWeatherInfo();
    showSpinner();
    const weatherPromise = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?${callback}&units=metric&APPID=d0c59a3b8526fb27afb9aa24179956fb`,
      { mode: 'cors' }
    );
    const weatherData = await weatherPromise.json();
    displayWeatherInfo(weatherData);
  } catch (err) {
    success = false;
    showAlert();
  } finally {
    hideSpinner();
    if (success) {
      unhideWeatherInfo();
    }
  }
};

export default getWeather;
