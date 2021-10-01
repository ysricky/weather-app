const toggleUnits = () => {
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

  const currentTemp = document.querySelectorAll('.temp-unit-data');
  const btnTempUnit = document.querySelector('.temp-unit');
  btnTempUnit.addEventListener('click', () => {
    switchUnit();
    currentTemp.forEach((span) => {
      const spanUnit = span;
      spanUnit.textContent = `${unitConverter(spanUnit.textContent)}`;
    });
    document.querySelector('.fahrenheit').classList.toggle('hide');
    document.querySelector('.celsius').classList.toggle('hide');
  });
};

export default toggleUnits;
