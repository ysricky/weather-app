const generateWeather = () => {
  const inputField = document.querySelector('input');
  const btnSearch = document.querySelector('.bi-search');

  const getWeather = async (keyword) => {
    try {
      const weatherPromise = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${keyword}&APPID=d0c59a3b8526fb27afb9aa24179956fb`,
        { mode: 'cors' }
      );
      const weatherData = await weatherPromise.json();
      console.log(weatherData);
    } catch (err) {
      console.log(err);
    }
  };

  btnSearch.addEventListener('click', () => {
    getWeather(inputField.value);
  });
};

export default generateWeather;

// iconURL = `<img src="http://openweathermap.org/img/w/${10d}.png">`;
// weatherData.weather[0].icon
