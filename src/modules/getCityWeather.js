import displayData from './displayData';

const generateWeather = () => {
  const inputField = document.querySelector('input');
  const inputForm = document.querySelector('form');

  const showSpinner = () => {
    document.querySelector('.loader').style.display = 'block';
  };

  const hideSpinner = () => {
    document.querySelector('.loader').style.display = 'none';
  };

  const getWeather = async (keyword) => {
    try {
      document.querySelector('.weather-info1').classList.toggle('hide');
      document.querySelector('.weather-info2').classList.toggle('hide');
      showSpinner();
      const weatherPromise = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${keyword}&units=metric&APPID=d0c59a3b8526fb27afb9aa24179956fb`,
        { mode: 'cors' }
      );
      const weatherData = await weatherPromise.json();
      displayData(weatherData);
    } catch (err) {
      const errorNotFound = document.querySelector('.not-found');
      document.querySelector('.weather-info1').classList.toggle('hide');
      document.querySelector('.weather-info2').classList.toggle('hide');
      errorNotFound.classList.toggle('hide');
    } finally {
      hideSpinner();
      document.querySelector('.weather-info1').classList.toggle('hide');
      document.querySelector('.weather-info2').classList.toggle('hide');
    }
  };

  inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    getWeather(inputField.value);
    inputField.value = '';
  });
};

export default generateWeather;

// iconURL = `<img src="http://openweathermap.org/img/w/${10d}.png">`;
// weatherData.weather[0].icon
