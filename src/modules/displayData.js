const displayWeatherInfo = (weatherObj) => {
  // weather-info1 card
  document.querySelector('.location-info span').textContent = weatherObj.name;
  document.querySelector(
    '.weather-icon img'
  ).src = `https://openweathermap.org/img/w/${weatherObj.weather[0].icon}.png`;
  document.querySelector('.weather-country-id span').textContent =
    weatherObj.sys.country;
  document.querySelector('.temperature-info span').textContent = Math.round(
    weatherObj.main.temp
  );
  document.querySelector(
    '.weather-description span'
  ).textContent = `${weatherObj.weather[0].description}`;

  // weather-info2 card
  document.querySelector('.weather-humidity span').textContent =
    weatherObj.main.humidity;
  document.querySelector('.weather-min-temp span').textContent = `${Math.round(
    weatherObj.main.temp_min
  )}`;
  document.querySelector('.weather-max-temp span').textContent = `${Math.round(
    weatherObj.main.temp_max
  )}`;
  document.querySelector('.weather-wind-speed span').textContent =
    weatherObj.wind.speed;
};

const hideWeatherInfo = () => {
  document.querySelector('.weather-info1').classList.add('hide');
  document.querySelector('.weather-info2').classList.add('hide');
};

const unhideWeatherInfo = () => {
  document.querySelector('.weather-info1').classList.remove('hide');
  document.querySelector('.weather-info2').classList.remove('hide');
};

const hideAlert = () => {
  document.querySelector('.not-found').classList.add('hide');
};

const showAlert = () => {
  document.querySelector('.not-found').classList.remove('hide');
};

export {
  displayWeatherInfo,
  hideWeatherInfo,
  unhideWeatherInfo,
  hideAlert,
  showAlert,
};
