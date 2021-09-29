// `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=d0c59a3b8526fb27afb9aa24179956fb`

const success = (pos) => {
  const crd = pos.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
};

const error = (err) => {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};

navigator.geolocation.getCurrentPosition(success, error);
