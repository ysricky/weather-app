// import toggleUnits from './toggleUnits';
import { inputField, inputForm, getLocation, getCity } from './getLocation';
import getWeather from './getWeather';
import toggleUnits from './toggleUnits';

const loadUI = () => {
  inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    getWeather(getCity(inputField.value));
    inputForm.reset();
  });

  toggleUnits();
  getLocation();
};

export default loadUI;
