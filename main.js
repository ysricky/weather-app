/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/app.js":
/*!****************************!*\
  !*** ./src/modules/app.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// get user location

function success(pos) {
  const crd = pos.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

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
    navigator.geolocation.getCurrentPosition(success, error);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateWeather);

// iconURL = `<img src="http://openweathermap.org/img/w/${10d}.png">`;
// weatherData.weather[0].icon


/***/ }),

/***/ "./src/modules/toggleTemp.js":
/*!***********************************!*\
  !*** ./src/modules/toggleTemp.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const toggleTemp = () => {
  const btnTempUnit = document.querySelector('.temp-unit');
  const btnFahrenheit = document.querySelector('.fahrenheit');
  const btnCelsius = document.querySelector('.celsius');

  btnTempUnit.addEventListener('click', () => {
    btnCelsius.classList.toggle('hide');
    btnFahrenheit.classList.toggle('hide');
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleTemp);


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
/* harmony import */ var _modules_toggleTemp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/toggleTemp */ "./src/modules/toggleTemp.js");
/* harmony import */ var _modules_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/app */ "./src/modules/app.js");



(0,_modules_toggleTemp__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_modules_app__WEBPACK_IMPORTED_MODULE_1__["default"])();
// openweather api http://api.openweathermap.org/data/2.5/weather?q=Jakarta&APPID=d0c59a3b8526fb27afb9aa24179956fb

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsYUFBYTtBQUN6Qyw0QkFBNEIsY0FBYztBQUMxQyw4QkFBOEIsY0FBYztBQUM1Qzs7QUFFQTtBQUNBLHdCQUF3QixTQUFTLEtBQUssWUFBWTtBQUNsRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELFFBQVE7QUFDckUsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlFQUFlLGVBQWUsRUFBQzs7QUFFL0IsMERBQTBELElBQUk7QUFDOUQ7Ozs7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7O1VDWDFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjhDO0FBQ0Y7O0FBRTVDLCtEQUFVO0FBQ1Ysd0RBQWU7QUFDZiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvYXBwLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvdG9nZ2xlVGVtcC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGdldCB1c2VyIGxvY2F0aW9uXG5cbmZ1bmN0aW9uIHN1Y2Nlc3MocG9zKSB7XG4gIGNvbnN0IGNyZCA9IHBvcy5jb29yZHM7XG5cbiAgY29uc29sZS5sb2coJ1lvdXIgY3VycmVudCBwb3NpdGlvbiBpczonKTtcbiAgY29uc29sZS5sb2coYExhdGl0dWRlIDogJHtjcmQubGF0aXR1ZGV9YCk7XG4gIGNvbnNvbGUubG9nKGBMb25naXR1ZGU6ICR7Y3JkLmxvbmdpdHVkZX1gKTtcbiAgY29uc29sZS5sb2coYE1vcmUgb3IgbGVzcyAke2NyZC5hY2N1cmFjeX0gbWV0ZXJzLmApO1xufVxuXG5mdW5jdGlvbiBlcnJvcihlcnIpIHtcbiAgY29uc29sZS53YXJuKGBFUlJPUigke2Vyci5jb2RlfSk6ICR7ZXJyLm1lc3NhZ2V9YCk7XG59XG5cbmNvbnN0IGdlbmVyYXRlV2VhdGhlciA9ICgpID0+IHtcbiAgY29uc3QgaW5wdXRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gIGNvbnN0IGJ0blNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iaS1zZWFyY2gnKTtcblxuICBjb25zdCBnZXRXZWF0aGVyID0gYXN5bmMgKGtleXdvcmQpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgd2VhdGhlclByb21pc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtrZXl3b3JkfSZBUFBJRD1kMGM1OWEzYjg1MjZmYjI3YWZiOWFhMjQxNzk5NTZmYmAsXG4gICAgICAgIHsgbW9kZTogJ2NvcnMnIH1cbiAgICAgICk7XG4gICAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHdlYXRoZXJQcm9taXNlLmpzb24oKTtcbiAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICB9O1xuXG4gIGJ0blNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBnZXRXZWF0aGVyKGlucHV0RmllbGQudmFsdWUpO1xuICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oc3VjY2VzcywgZXJyb3IpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlV2VhdGhlcjtcblxuLy8gaWNvblVSTCA9IGA8aW1nIHNyYz1cImh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3cvJHsxMGR9LnBuZ1wiPmA7XG4vLyB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmljb25cbiIsImNvbnN0IHRvZ2dsZVRlbXAgPSAoKSA9PiB7XG4gIGNvbnN0IGJ0blRlbXBVbml0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXAtdW5pdCcpO1xuICBjb25zdCBidG5GYWhyZW5oZWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhaHJlbmhlaXQnKTtcbiAgY29uc3QgYnRuQ2Vsc2l1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jZWxzaXVzJyk7XG5cbiAgYnRuVGVtcFVuaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYnRuQ2Vsc2l1cy5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG4gICAgYnRuRmFocmVuaGVpdC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9nZ2xlVGVtcDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHRvZ2dsZVRlbXAgZnJvbSAnLi9tb2R1bGVzL3RvZ2dsZVRlbXAnO1xuaW1wb3J0IGdlbmVyYXRlV2VhdGhlciBmcm9tICcuL21vZHVsZXMvYXBwJztcblxudG9nZ2xlVGVtcCgpO1xuZ2VuZXJhdGVXZWF0aGVyKCk7XG4vLyBvcGVud2VhdGhlciBhcGkgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPUpha2FydGEmQVBQSUQ9ZDBjNTlhM2I4NTI2ZmIyN2FmYjlhYTI0MTc5OTU2ZmJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==