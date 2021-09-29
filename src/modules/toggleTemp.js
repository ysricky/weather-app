const toggleTemp = () => {
  const btnTempUnit = document.querySelector('.temp-unit');
  const btnFahrenheit = document.querySelector('.fahrenheit');
  const btnCelsius = document.querySelector('.celsius');

  btnTempUnit.addEventListener('click', () => {
    btnCelsius.classList.toggle('hide');
    btnFahrenheit.classList.toggle('hide');
  });
};

export default toggleTemp;
