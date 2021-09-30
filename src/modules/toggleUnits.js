const toggleUnits = () => {
  const currentTemp = document.querySelectorAll('.temp-unit-data');
  const btnTempUnit = document.querySelector('.temp-unit');
  const btnFahrenheit = document.querySelector('.fahrenheit');
  const btnCelsius = document.querySelector('.celsius');

  let tempUnit = 'c';

  const switchUnit = () => {
    if (tempUnit === 'c') {
      tempUnit = 'f';
    } else {
      tempUnit = 'c';
    }
  };

  const unitConverter = (value) => {
    let convertedUnit;
    if (tempUnit === 'f') {
      convertedUnit = Math.round(parseInt(value, 10) * (9 / 5) + 32);
    } else {
      convertedUnit = Math.round((parseInt(value, 10) - 32) * (5 / 9));
    }
    return convertedUnit;
  };

  btnTempUnit.addEventListener('click', () => {
    switchUnit();
    currentTemp.forEach((span) => {
      // eslint-disable-next-line no-param-reassign
      span.textContent = `${unitConverter(span.textContent)}`;
    });
    btnCelsius.classList.toggle('hide');
    btnFahrenheit.classList.toggle('hide');
  });
};

export default toggleUnits;
