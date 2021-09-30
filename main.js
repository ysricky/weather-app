/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/displayData.js":
/*!************************************!*\
  !*** ./src/modules/displayData.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const displayData = (weatherObj) => {
  // weather-info1 card
  document.querySelector('.location-info span').textContent = weatherObj.name;
  document.querySelector(
    '.weather-icon img'
  ).src = `http://openweathermap.org/img/w/${weatherObj.weather[0].icon}.png`;
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayData);


/***/ }),

/***/ "./src/modules/getCityWeather.js":
/*!***************************************!*\
  !*** ./src/modules/getCityWeather.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _displayData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayData */ "./src/modules/displayData.js");


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
      (0,_displayData__WEBPACK_IMPORTED_MODULE_0__["default"])(weatherData);
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateWeather);

// iconURL = `<img src="http://openweathermap.org/img/w/${10d}.png">`;
// weatherData.weather[0].icon


/***/ }),

/***/ "./src/modules/toggleUnits.js":
/*!************************************!*\
  !*** ./src/modules/toggleUnits.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleUnits);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_toggleUnits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/toggleUnits */ "./src/modules/toggleUnits.js");
/* harmony import */ var _modules_getCityWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getCityWeather */ "./src/modules/getCityWeather.js");



(0,_modules_toggleUnits__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_modules_getCityWeather__WEBPACK_IMPORTED_MODULE_1__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsMkJBQTJCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGtDQUFrQzs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FO0FBQ3BFO0FBQ0EsSUFBSTtBQUNKLG9FQUFvRTtBQUNwRTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUJhOztBQUV4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsUUFBUTtBQUNyRSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLE1BQU0sd0RBQVc7QUFDakIsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsZUFBZSxFQUFDOztBQUUvQiwwREFBMEQsSUFBSTtBQUM5RDs7Ozs7Ozs7Ozs7Ozs7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnQ0FBZ0M7QUFDNUQsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7O1VDckMzQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05nRDtBQUNPOztBQUV2RCxnRUFBVztBQUNYLG1FQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9kaXNwbGF5RGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2dldENpdHlXZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvdG9nZ2xlVW5pdHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkaXNwbGF5RGF0YSA9ICh3ZWF0aGVyT2JqKSA9PiB7XG4gIC8vIHdlYXRoZXItaW5mbzEgY2FyZFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jYXRpb24taW5mbyBzcGFuJykudGV4dENvbnRlbnQgPSB3ZWF0aGVyT2JqLm5hbWU7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJy53ZWF0aGVyLWljb24gaW1nJ1xuICApLnNyYyA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93LyR7d2VhdGhlck9iai53ZWF0aGVyWzBdLmljb259LnBuZ2A7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWNvdW50cnktaWQgc3BhbicpLnRleHRDb250ZW50ID1cbiAgICB3ZWF0aGVyT2JqLnN5cy5jb3VudHJ5O1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmUtaW5mbyBzcGFuJykudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKFxuICAgIHdlYXRoZXJPYmoubWFpbi50ZW1wXG4gICk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJy53ZWF0aGVyLWRlc2NyaXB0aW9uIHNwYW4nXG4gICkudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyT2JqLndlYXRoZXJbMF0uZGVzY3JpcHRpb259YDtcblxuICAvLyB3ZWF0aGVyLWluZm8yIGNhcmRcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItaHVtaWRpdHkgc3BhbicpLnRleHRDb250ZW50ID1cbiAgICB3ZWF0aGVyT2JqLm1haW4uaHVtaWRpdHk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLW1pbi10ZW1wIHNwYW4nKS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoXG4gICAgd2VhdGhlck9iai5tYWluLnRlbXBfbWluXG4gICl9YDtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItbWF4LXRlbXAgc3BhbicpLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChcbiAgICB3ZWF0aGVyT2JqLm1haW4udGVtcF9tYXhcbiAgKX1gO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci13aW5kLXNwZWVkIHNwYW4nKS50ZXh0Q29udGVudCA9XG4gICAgd2VhdGhlck9iai53aW5kLnNwZWVkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheURhdGE7XG4iLCJpbXBvcnQgZGlzcGxheURhdGEgZnJvbSAnLi9kaXNwbGF5RGF0YSc7XG5cbmNvbnN0IGdlbmVyYXRlV2VhdGhlciA9ICgpID0+IHtcbiAgY29uc3QgaW5wdXRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gIGNvbnN0IGlucHV0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcblxuICBjb25zdCBzaG93U3Bpbm5lciA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGVyJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIH07XG5cbiAgY29uc3QgaGlkZVNwaW5uZXIgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRlcicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH07XG5cbiAgY29uc3QgZ2V0V2VhdGhlciA9IGFzeW5jIChrZXl3b3JkKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWluZm8xJykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItaW5mbzInKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG4gICAgICBzaG93U3Bpbm5lcigpO1xuICAgICAgY29uc3Qgd2VhdGhlclByb21pc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtrZXl3b3JkfSZ1bml0cz1tZXRyaWMmQVBQSUQ9ZDBjNTlhM2I4NTI2ZmIyN2FmYjlhYTI0MTc5OTU2ZmJgLFxuICAgICAgICB7IG1vZGU6ICdjb3JzJyB9XG4gICAgICApO1xuICAgICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCB3ZWF0aGVyUHJvbWlzZS5qc29uKCk7XG4gICAgICBkaXNwbGF5RGF0YSh3ZWF0aGVyRGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zdCBlcnJvck5vdEZvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdC1mb3VuZCcpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItaW5mbzEnKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1pbmZvMicpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbiAgICAgIGVycm9yTm90Rm91bmQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBoaWRlU3Bpbm5lcigpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItaW5mbzEnKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1pbmZvMicpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbiAgICB9XG4gIH07XG5cbiAgaW5wdXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGdldFdlYXRoZXIoaW5wdXRGaWVsZC52YWx1ZSk7XG4gICAgaW5wdXRGaWVsZC52YWx1ZSA9ICcnO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlV2VhdGhlcjtcblxuLy8gaWNvblVSTCA9IGA8aW1nIHNyYz1cImh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3cvJHsxMGR9LnBuZ1wiPmA7XG4vLyB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmljb25cbiIsImNvbnN0IHRvZ2dsZVVuaXRzID0gKCkgPT4ge1xuICBjb25zdCBjdXJyZW50VGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZW1wLXVuaXQtZGF0YScpO1xuICBjb25zdCBidG5UZW1wVW5pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wLXVuaXQnKTtcbiAgY29uc3QgYnRuRmFocmVuaGVpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYWhyZW5oZWl0Jyk7XG4gIGNvbnN0IGJ0bkNlbHNpdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Vsc2l1cycpO1xuXG4gIGxldCB0ZW1wVW5pdCA9ICdjJztcblxuICBjb25zdCBzd2l0Y2hVbml0ID0gKCkgPT4ge1xuICAgIGlmICh0ZW1wVW5pdCA9PT0gJ2MnKSB7XG4gICAgICB0ZW1wVW5pdCA9ICdmJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGVtcFVuaXQgPSAnYyc7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHVuaXRDb252ZXJ0ZXIgPSAodmFsdWUpID0+IHtcbiAgICBsZXQgY29udmVydGVkVW5pdDtcbiAgICBpZiAodGVtcFVuaXQgPT09ICdmJykge1xuICAgICAgY29udmVydGVkVW5pdCA9IE1hdGgucm91bmQocGFyc2VJbnQodmFsdWUsIDEwKSAqICg5IC8gNSkgKyAzMik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnZlcnRlZFVuaXQgPSBNYXRoLnJvdW5kKChwYXJzZUludCh2YWx1ZSwgMTApIC0gMzIpICogKDUgLyA5KSk7XG4gICAgfVxuICAgIHJldHVybiBjb252ZXJ0ZWRVbml0O1xuICB9O1xuXG4gIGJ0blRlbXBVbml0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHN3aXRjaFVuaXQoKTtcbiAgICBjdXJyZW50VGVtcC5mb3JFYWNoKChzcGFuKSA9PiB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBgJHt1bml0Q29udmVydGVyKHNwYW4udGV4dENvbnRlbnQpfWA7XG4gICAgfSk7XG4gICAgYnRuQ2Vsc2l1cy5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG4gICAgYnRuRmFocmVuaGVpdC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9nZ2xlVW5pdHM7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB0b2dnbGVVbml0cyBmcm9tICcuL21vZHVsZXMvdG9nZ2xlVW5pdHMnO1xuaW1wb3J0IGdlbmVyYXRlV2VhdGhlciBmcm9tICcuL21vZHVsZXMvZ2V0Q2l0eVdlYXRoZXInO1xuXG50b2dnbGVVbml0cygpO1xuZ2VuZXJhdGVXZWF0aGVyKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=