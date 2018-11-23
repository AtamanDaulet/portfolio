/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/auth.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/auth.js":
/*!*****************************!*\
  !*** ./src/scripts/auth.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./preloader */ \"./src/scripts/preloader.js\");\n\n__webpack_require__(/*! ./modules/flip */ \"./src/scripts/modules/flip.js\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9hdXRoLmpzP2Q4YTIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSIsImZpbGUiOiIuL3NyYy9zY3JpcHRzL2F1dGguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL3ByZWxvYWRlclwiO1xyXG5pbXBvcnQgXCIuL21vZHVsZXMvZmxpcFwiO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/auth.js\n");

/***/ }),

/***/ "./src/scripts/modules/flip.js":
/*!*************************************!*\
  !*** ./src/scripts/modules/flip.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar login = document.querySelector(\".btn_auth\");\nvar returnToManePage = document.querySelector(\".btn-main\");\nvar card = document.querySelector(\".welcome__card\");\n\nlogin.addEventListener(\"click\", function () {\n    card.classList.toggle(\"isActive\");\n});\nreturnToManePage.addEventListener(\"click\", function () {\n    card.classList.toggle(\"isActive\");\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tb2R1bGVzL2ZsaXAuanM/ZDEzOSJdLCJuYW1lcyI6WyJsb2dpbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInJldHVyblRvTWFuZVBhZ2UiLCJjYXJkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxRQUFRQyxTQUFTQyxhQUFULENBQXVCLFdBQXZCLENBQWQ7QUFDQSxJQUFNQyxtQkFBbUJGLFNBQVNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBekI7QUFDQSxJQUFJRSxPQUFPSCxTQUFTQyxhQUFULENBQXVCLGdCQUF2QixDQUFYOztBQUVBRixNQUFNSyxnQkFBTixDQUF1QixPQUF2QixFQUErQixZQUFZO0FBQ3ZDRCxTQUFLRSxTQUFMLENBQWVDLE1BQWYsQ0FBc0IsVUFBdEI7QUFDSCxDQUZEO0FBR0FKLGlCQUFpQkUsZ0JBQWpCLENBQWtDLE9BQWxDLEVBQTBDLFlBQVk7QUFDbERELFNBQUtFLFNBQUwsQ0FBZUMsTUFBZixDQUFzQixVQUF0QjtBQUNILENBRkQiLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb2R1bGVzL2ZsaXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBsb2dpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuX2F1dGhcIik7XHJcbmNvbnN0IHJldHVyblRvTWFuZVBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1tYWluXCIpO1xyXG5sZXQgY2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VsY29tZV9fY2FyZFwiKTtcclxuXHJcbmxvZ2luLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uICgpIHtcclxuICAgIGNhcmQuY2xhc3NMaXN0LnRvZ2dsZShcImlzQWN0aXZlXCIpO1xyXG59KVxyXG5yZXR1cm5Ub01hbmVQYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uICgpIHtcclxuICAgIGNhcmQuY2xhc3NMaXN0LnRvZ2dsZShcImlzQWN0aXZlXCIpO1xyXG59KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/modules/flip.js\n");

/***/ }),

/***/ "./src/scripts/preloader.js":
/*!**********************************!*\
  !*** ./src/scripts/preloader.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var preloader = document.querySelector(\".preloader\"),\n      preloaderSvg = document.querySelector(\".preloader__circles_svg \"),\n      circleOne = document.querySelector(\".preloader_circle_outside\"),\n      circleTwo = document.querySelector(\".preloader_circle_middle\"),\n      circleThree = document.querySelector(\".preloader_circle_inside\"),\n      preloaderText = document.querySelector(\".preloader__text\");\n\n  var currentPercent = 0,\n      delayOfircleOne = 30,\n      delayOfircleTwo = 20;\n\n  var animateInterval = void 0;\n\n  var animatePreloader = function animatePreloader() {\n\n    currentPercent += 5;\n    if (currentPercent >= 100) {\n      preloaderText.innerHTML = 100;\n      currentPercent = 100;\n      clearInterval(animateInterval);\n      setTimeout(function () {\n        preloaderSvg.style.opacity = 0;\n        preloaderText.style.opacity = 0;\n      }, 500);\n      setTimeout(function () {\n        preloader.style.opacity = 0;\n        setTimeout(function () {\n          preloader.style.display = \"none\";\n        }, 150);\n      }, 100);\n    }\n    if (currentPercent > delayOfircleOne) {\n      circleOne.style.strokeDashoffset = 440 - 440 / 100 * (currentPercent * (delayOfircleOne / 100 + 1) - delayOfircleOne);\n    }\n    if (currentPercent > delayOfircleTwo) {\n      circleTwo.style.strokeDashoffset = 345 - 345 / 100 * (currentPercent * (delayOfircleTwo / 100 + 1) - delayOfircleTwo);\n    }\n    circleThree.style.strokeDashoffset = 251 - 251 / 100 * currentPercent;\n    preloaderText.innerHTML = currentPercent;\n  };\n  if (preloaderSvg) {\n    animateInterval = setInterval(animatePreloader, 90);\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9wcmVsb2FkZXIuanM/NDc2NSJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcmVsb2FkZXIiLCJxdWVyeVNlbGVjdG9yIiwicHJlbG9hZGVyU3ZnIiwiY2lyY2xlT25lIiwiY2lyY2xlVHdvIiwiY2lyY2xlVGhyZWUiLCJwcmVsb2FkZXJUZXh0IiwiY3VycmVudFBlcmNlbnQiLCJkZWxheU9maXJjbGVPbmUiLCJkZWxheU9maXJjbGVUd28iLCJhbmltYXRlSW50ZXJ2YWwiLCJhbmltYXRlUHJlbG9hZGVyIiwiaW5uZXJIVE1MIiwiY2xlYXJJbnRlcnZhbCIsInNldFRpbWVvdXQiLCJzdHlsZSIsIm9wYWNpdHkiLCJkaXNwbGF5Iiwic3Ryb2tlRGFzaG9mZnNldCIsInNldEludGVydmFsIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxTQUFTQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBVztBQUN2RCxNQUFNQyxZQUFZRixTQUFTRyxhQUFULENBQXVCLFlBQXZCLENBQWxCO0FBQUEsTUFDRUMsZUFBZUosU0FBU0csYUFBVCxDQUF1QiwwQkFBdkIsQ0FEakI7QUFBQSxNQUVFRSxZQUFZTCxTQUFTRyxhQUFULENBQXVCLDJCQUF2QixDQUZkO0FBQUEsTUFHRUcsWUFBWU4sU0FBU0csYUFBVCxDQUF1QiwwQkFBdkIsQ0FIZDtBQUFBLE1BSUVJLGNBQWNQLFNBQVNHLGFBQVQsQ0FBdUIsMEJBQXZCLENBSmhCO0FBQUEsTUFLRUssZ0JBQWdCUixTQUFTRyxhQUFULENBQXVCLGtCQUF2QixDQUxsQjs7QUFPQSxNQUFJTSxpQkFBaUIsQ0FBckI7QUFBQSxNQUNFQyxrQkFBa0IsRUFEcEI7QUFBQSxNQUVFQyxrQkFBa0IsRUFGcEI7O0FBSUEsTUFBSUMsd0JBQUo7O0FBRUEsTUFBSUMsbUJBQW1CLFNBQW5CQSxnQkFBbUIsR0FBTTs7QUFFM0JKLHNCQUFrQixDQUFsQjtBQUNBLFFBQUlBLGtCQUFrQixHQUF0QixFQUEyQjtBQUN6QkQsb0JBQWNNLFNBQWQsR0FBMEIsR0FBMUI7QUFDQUwsdUJBQWlCLEdBQWpCO0FBQ0FNLG9CQUFjSCxlQUFkO0FBQ0FJLGlCQUFXLFlBQU07QUFDZloscUJBQWFhLEtBQWIsQ0FBbUJDLE9BQW5CLEdBQTZCLENBQTdCO0FBQ0FWLHNCQUFjUyxLQUFkLENBQW9CQyxPQUFwQixHQUE4QixDQUE5QjtBQUNELE9BSEQsRUFHRyxHQUhIO0FBSUFGLGlCQUFXLFlBQU07QUFDZmQsa0JBQVVlLEtBQVYsQ0FBZ0JDLE9BQWhCLEdBQTBCLENBQTFCO0FBQ0FGLG1CQUFXLFlBQU07QUFDZmQsb0JBQVVlLEtBQVYsQ0FBZ0JFLE9BQWhCLEdBQTBCLE1BQTFCO0FBQ0QsU0FGRCxFQUVHLEdBRkg7QUFHRCxPQUxELEVBS0csR0FMSDtBQU1EO0FBQ0QsUUFBSVYsaUJBQWlCQyxlQUFyQixFQUFzQztBQUNwQ0wsZ0JBQVVZLEtBQVYsQ0FBZ0JHLGdCQUFoQixHQUNFLE1BQ0MsTUFBTSxHQUFQLElBQ0dYLGtCQUFtQkMsa0JBQWtCLEdBQW5CLEdBQTBCLENBQTVDLElBQWlEQSxlQURwRCxDQUZGO0FBSUQ7QUFDRCxRQUFJRCxpQkFBaUJFLGVBQXJCLEVBQXNDO0FBQ3BDTCxnQkFBVVcsS0FBVixDQUFnQkcsZ0JBQWhCLEdBQ0UsTUFDQyxNQUFNLEdBQVAsSUFDR1gsa0JBQW1CRSxrQkFBa0IsR0FBbkIsR0FBMEIsQ0FBNUMsSUFBaURBLGVBRHBELENBRkY7QUFJRDtBQUNESixnQkFBWVUsS0FBWixDQUFrQkcsZ0JBQWxCLEdBQXFDLE1BQU8sTUFBTSxHQUFQLEdBQWNYLGNBQXpEO0FBQ0FELGtCQUFjTSxTQUFkLEdBQTBCTCxjQUExQjtBQUNELEdBaENEO0FBaUNBLE1BQUlMLFlBQUosRUFBa0I7QUFDaEJRLHNCQUFrQlMsWUFBWVIsZ0JBQVosRUFBOEIsRUFBOUIsQ0FBbEI7QUFDRDtBQUNGLENBbEREIiwiZmlsZSI6Ii4vc3JjL3NjcmlwdHMvcHJlbG9hZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XHJcbiAgY29uc3QgcHJlbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVsb2FkZXJcIiksXHJcbiAgICBwcmVsb2FkZXJTdmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZWxvYWRlcl9fY2lyY2xlc19zdmcgXCIpLFxyXG4gICAgY2lyY2xlT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVsb2FkZXJfY2lyY2xlX291dHNpZGVcIiksXHJcbiAgICBjaXJjbGVUd28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZWxvYWRlcl9jaXJjbGVfbWlkZGxlXCIpLFxyXG4gICAgY2lyY2xlVGhyZWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZWxvYWRlcl9jaXJjbGVfaW5zaWRlXCIpLFxyXG4gICAgcHJlbG9hZGVyVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJlbG9hZGVyX190ZXh0XCIpO1xyXG5cclxuICBsZXQgY3VycmVudFBlcmNlbnQgPSAwLFxyXG4gICAgZGVsYXlPZmlyY2xlT25lID0gMzAsXHJcbiAgICBkZWxheU9maXJjbGVUd28gPSAyMDtcclxuXHJcbiAgbGV0IGFuaW1hdGVJbnRlcnZhbDtcclxuXHJcbiAgbGV0IGFuaW1hdGVQcmVsb2FkZXIgPSAoKSA9PiB7XHJcblxyXG4gICAgY3VycmVudFBlcmNlbnQgKz0gNTtcclxuICAgIGlmIChjdXJyZW50UGVyY2VudCA+PSAxMDApIHtcclxuICAgICAgcHJlbG9hZGVyVGV4dC5pbm5lckhUTUwgPSAxMDA7XHJcbiAgICAgIGN1cnJlbnRQZXJjZW50ID0gMTAwO1xyXG4gICAgICBjbGVhckludGVydmFsKGFuaW1hdGVJbnRlcnZhbCk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHByZWxvYWRlclN2Zy5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICBwcmVsb2FkZXJUZXh0LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgICB9LCA1MDApO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBwcmVsb2FkZXIuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBwcmVsb2FkZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIH0sIDE1MCk7XHJcbiAgICAgIH0sIDEwMCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY3VycmVudFBlcmNlbnQgPiBkZWxheU9maXJjbGVPbmUpIHtcclxuICAgICAgY2lyY2xlT25lLnN0eWxlLnN0cm9rZURhc2hvZmZzZXQgPVxyXG4gICAgICAgIDQ0MCAtXHJcbiAgICAgICAgKDQ0MCAvIDEwMCkgKlxyXG4gICAgICAgICAgKGN1cnJlbnRQZXJjZW50ICogKChkZWxheU9maXJjbGVPbmUgLyAxMDApICsgMSkgLSBkZWxheU9maXJjbGVPbmUpO1xyXG4gICAgfVxyXG4gICAgaWYgKGN1cnJlbnRQZXJjZW50ID4gZGVsYXlPZmlyY2xlVHdvKSB7XHJcbiAgICAgIGNpcmNsZVR3by5zdHlsZS5zdHJva2VEYXNob2Zmc2V0ID1cclxuICAgICAgICAzNDUgLVxyXG4gICAgICAgICgzNDUgLyAxMDApICpcclxuICAgICAgICAgIChjdXJyZW50UGVyY2VudCAqICgoZGVsYXlPZmlyY2xlVHdvIC8gMTAwKSArIDEpIC0gZGVsYXlPZmlyY2xlVHdvKTtcclxuICAgIH1cclxuICAgIGNpcmNsZVRocmVlLnN0eWxlLnN0cm9rZURhc2hvZmZzZXQgPSAyNTEgLSAoMjUxIC8gMTAwKSAqIGN1cnJlbnRQZXJjZW50O1xyXG4gICAgcHJlbG9hZGVyVGV4dC5pbm5lckhUTUwgPSBjdXJyZW50UGVyY2VudDtcclxuICB9O1xyXG4gIGlmIChwcmVsb2FkZXJTdmcpIHtcclxuICAgIGFuaW1hdGVJbnRlcnZhbCA9IHNldEludGVydmFsKGFuaW1hdGVQcmVsb2FkZXIsIDkwKTtcclxuICB9XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/preloader.js\n");

/***/ })

/******/ });