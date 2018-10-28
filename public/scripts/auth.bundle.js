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
eval("\n\n__webpack_require__(/*! ./modules/flip */ \"./src/scripts/modules/flip.js\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9hdXRoLmpzP2Q4YTIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSIsImZpbGUiOiIuL3NyYy9zY3JpcHRzL2F1dGguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL21vZHVsZXMvZmxpcFwiO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/auth.js\n");

/***/ }),

/***/ "./src/scripts/modules/flip.js":
/*!*************************************!*\
  !*** ./src/scripts/modules/flip.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar login = document.querySelector(\".btn_auth\");\nvar returnToManePage = document.querySelector(\".btn-main\");\nvar card = document.querySelector(\".welcome__card\");\n\nlogin.addEventListener(\"click\", function () {\n    card.classList.toggle(\"isActive\");\n});\nreturnToManePage.addEventListener(\"click\", function () {\n    card.classList.toggle(\"isActive\");\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tb2R1bGVzL2ZsaXAuanM/ZDEzOSJdLCJuYW1lcyI6WyJsb2dpbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInJldHVyblRvTWFuZVBhZ2UiLCJjYXJkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxRQUFRQyxTQUFTQyxhQUFULENBQXVCLFdBQXZCLENBQWQ7QUFDQSxJQUFNQyxtQkFBbUJGLFNBQVNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBekI7QUFDQSxJQUFJRSxPQUFPSCxTQUFTQyxhQUFULENBQXVCLGdCQUF2QixDQUFYOztBQUVBRixNQUFNSyxnQkFBTixDQUF1QixPQUF2QixFQUErQixZQUFZO0FBQ3ZDRCxTQUFLRSxTQUFMLENBQWVDLE1BQWYsQ0FBc0IsVUFBdEI7QUFDSCxDQUZEO0FBR0FKLGlCQUFpQkUsZ0JBQWpCLENBQWtDLE9BQWxDLEVBQTBDLFlBQVk7QUFDbERELFNBQUtFLFNBQUwsQ0FBZUMsTUFBZixDQUFzQixVQUF0QjtBQUNILENBRkQiLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb2R1bGVzL2ZsaXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBsb2dpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuX2F1dGhcIik7XHJcbmNvbnN0IHJldHVyblRvTWFuZVBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1tYWluXCIpO1xyXG5sZXQgY2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VsY29tZV9fY2FyZFwiKTtcclxuXHJcbmxvZ2luLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uICgpIHtcclxuICAgIGNhcmQuY2xhc3NMaXN0LnRvZ2dsZShcImlzQWN0aXZlXCIpO1xyXG59KVxyXG5yZXR1cm5Ub01hbmVQYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uICgpIHtcclxuICAgIGNhcmQuY2xhc3NMaXN0LnRvZ2dsZShcImlzQWN0aXZlXCIpO1xyXG59KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/modules/flip.js\n");

/***/ })

/******/ });