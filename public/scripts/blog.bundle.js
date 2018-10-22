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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/blog.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/blog.js":
/*!*****************************!*\
  !*** ./src/scripts/blog.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./modules/parallax */ \"./src/scripts/modules/parallax.js\");\n\n__webpack_require__(/*! ./modules/menu-overlay */ \"./src/scripts/modules/menu-overlay.js\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9ibG9nLmpzP2RjMTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSIsImZpbGUiOiIuL3NyYy9zY3JpcHRzL2Jsb2cuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL21vZHVsZXMvcGFyYWxsYXhcIjtcclxuaW1wb3J0IFwiLi9tb2R1bGVzL21lbnUtb3ZlcmxheVwiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/blog.js\n");

/***/ }),

/***/ "./src/scripts/modules/menu-overlay.js":
/*!*********************************************!*\
  !*** ./src/scripts/modules/menu-overlay.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar hamburger = document.querySelector(\".hamburger\");\nvar cancel = document.querySelector(\".overlay__icon\");\nvar overlay = document.querySelector(\".overlay\");\n\nfunction openOverlay() {\n    overlay.style.zIndex = 12;\n}\n\nfunction closeOverlay() {\n    overlay.style.zIndex = -12;\n}\n\nhamburger.addEventListener(\"click\", openOverlay);\ncancel.addEventListener(\"click\", closeOverlay);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tb2R1bGVzL21lbnUtb3ZlcmxheS5qcz85MGM2Il0sIm5hbWVzIjpbImhhbWJ1cmdlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNhbmNlbCIsIm92ZXJsYXkiLCJvcGVuT3ZlcmxheSIsInN0eWxlIiwiekluZGV4IiwiY2xvc2VPdmVybGF5IiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxZQUFZQyxTQUFTQyxhQUFULENBQXVCLFlBQXZCLENBQWhCO0FBQ0EsSUFBSUMsU0FBU0YsU0FBU0MsYUFBVCxDQUF1QixnQkFBdkIsQ0FBYjtBQUNBLElBQUlFLFVBQVVILFNBQVNDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBZDs7QUFFQSxTQUFTRyxXQUFULEdBQXNCO0FBQ2xCRCxZQUFRRSxLQUFSLENBQWNDLE1BQWQsR0FBdUIsRUFBdkI7QUFDSDs7QUFFRCxTQUFTQyxZQUFULEdBQXVCO0FBQ25CSixZQUFRRSxLQUFSLENBQWNDLE1BQWQsR0FBdUIsQ0FBQyxFQUF4QjtBQUNIOztBQUVEUCxVQUFVUyxnQkFBVixDQUE0QixPQUE1QixFQUFxQ0osV0FBckM7QUFDQUYsT0FBT00sZ0JBQVAsQ0FBeUIsT0FBekIsRUFBa0NELFlBQWxDIiwiZmlsZSI6Ii4vc3JjL3NjcmlwdHMvbW9kdWxlcy9tZW51LW92ZXJsYXkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaGFtYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oYW1idXJnZXJcIik7XHJcbnZhciBjYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlfX2ljb25cIik7XHJcbnZhciBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xyXG5cclxuZnVuY3Rpb24gb3Blbk92ZXJsYXkoKXtcclxuICAgIG92ZXJsYXkuc3R5bGUuekluZGV4ID0gMTI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlT3ZlcmxheSgpe1xyXG4gICAgb3ZlcmxheS5zdHlsZS56SW5kZXggPSAtMTI7XHJcbn1cclxuXHJcbmhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCBcImNsaWNrXCIsIG9wZW5PdmVybGF5ICk7XHJcbmNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCBcImNsaWNrXCIsIGNsb3NlT3ZlcmxheSApO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/modules/menu-overlay.js\n");

/***/ }),

/***/ "./src/scripts/modules/parallax.js":
/*!*****************************************!*\
  !*** ./src/scripts/modules/parallax.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar parallax = function () {\n    var bg = document.querySelector(\".hero__parallax\");\n    var user = document.querySelector(\".parallax__base\");\n    var sectionText = document.querySelector(\".parallax__title\");\n\n    return {\n        move: function move(block, windowScroll, strafeAmount) {\n            var strafe = windowScroll / -strafeAmount + \"%\";\n            var transformString = \"translate3d(0,\" + strafe + \",0\";\n\n            var style = block.style;\n            style.transform = transformString;\n            style.webkitTransform = transformString;\n\n            style.top = strafe;\n        },\n        init: function init(wScroll) {\n            this.move(bg, wScroll, 45);\n            this.move(sectionText, wScroll, 30);\n            this.move(user, wScroll, 20);\n        }\n    };\n}();\n\nwindow.onscroll = function () {\n    var wScroll = window.pageYOffset;\n\n    parallax.init(wScroll);\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tb2R1bGVzL3BhcmFsbGF4LmpzP2IyNzMiXSwibmFtZXMiOlsicGFyYWxsYXgiLCJiZyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInVzZXIiLCJzZWN0aW9uVGV4dCIsIm1vdmUiLCJibG9jayIsIndpbmRvd1Njcm9sbCIsInN0cmFmZUFtb3VudCIsInN0cmFmZSIsInRyYW5zZm9ybVN0cmluZyIsInN0eWxlIiwidHJhbnNmb3JtIiwid2Via2l0VHJhbnNmb3JtIiwidG9wIiwiaW5pdCIsIndTY3JvbGwiLCJ3aW5kb3ciLCJvbnNjcm9sbCIsInBhZ2VZT2Zmc2V0Il0sIm1hcHBpbmdzIjoiOztBQUNBLElBQUlBLFdBQVksWUFBWTtBQUN4QixRQUFJQyxLQUFLQyxTQUFTQyxhQUFULENBQXVCLGlCQUF2QixDQUFUO0FBQ0EsUUFBSUMsT0FBT0YsU0FBU0MsYUFBVCxDQUF1QixpQkFBdkIsQ0FBWDtBQUNBLFFBQUlFLGNBQWNILFNBQVNDLGFBQVQsQ0FBdUIsa0JBQXZCLENBQWxCOztBQUVBLFdBQU07QUFDRkcsY0FBTSxjQUFVQyxLQUFWLEVBQWlCQyxZQUFqQixFQUErQkMsWUFBL0IsRUFBNkM7QUFDL0MsZ0JBQUlDLFNBQVNGLGVBQWMsQ0FBRUMsWUFBaEIsR0FBK0IsR0FBNUM7QUFDQSxnQkFBSUUsa0JBQWtCLG1CQUFtQkQsTUFBbkIsR0FBNEIsSUFBbEQ7O0FBRUEsZ0JBQUlFLFFBQVFMLE1BQU1LLEtBQWxCO0FBQ0FBLGtCQUFNQyxTQUFOLEdBQWtCRixlQUFsQjtBQUNBQyxrQkFBTUUsZUFBTixHQUF3QkgsZUFBeEI7O0FBRUFDLGtCQUFNRyxHQUFOLEdBQVlMLE1BQVo7QUFDSCxTQVZDO0FBV0ZNLGNBQU0sY0FBVUMsT0FBVixFQUFtQjtBQUNyQixpQkFBS1gsSUFBTCxDQUFVTCxFQUFWLEVBQWNnQixPQUFkLEVBQXVCLEVBQXZCO0FBQ0EsaUJBQUtYLElBQUwsQ0FBVUQsV0FBVixFQUF1QlksT0FBdkIsRUFBZ0MsRUFBaEM7QUFDQSxpQkFBS1gsSUFBTCxDQUFVRixJQUFWLEVBQWdCYSxPQUFoQixFQUF5QixFQUF6QjtBQUNIO0FBZkMsS0FBTjtBQWlCSCxDQXRCZSxFQUFoQjs7QUF3QkFDLE9BQU9DLFFBQVAsR0FBa0IsWUFBVTtBQUN4QixRQUFJRixVQUFVQyxPQUFPRSxXQUFyQjs7QUFFQXBCLGFBQVNnQixJQUFULENBQWNDLE9BQWQ7QUFDSCxDQUpEIiwiZmlsZSI6Ii4vc3JjL3NjcmlwdHMvbW9kdWxlcy9wYXJhbGxheC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgcGFyYWxsYXggPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGJnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZXJvX19wYXJhbGxheFwiKTtcclxuICAgIHZhciB1c2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYXJhbGxheF9fYmFzZVwiKTtcclxuICAgIHZhciBzZWN0aW9uVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFyYWxsYXhfX3RpdGxlXCIpO1xyXG5cclxuICAgIHJldHVybntcclxuICAgICAgICBtb3ZlOiBmdW5jdGlvbiAoYmxvY2ssIHdpbmRvd1Njcm9sbCwgc3RyYWZlQW1vdW50KSB7XHJcbiAgICAgICAgICAgIHZhciBzdHJhZmUgPSB3aW5kb3dTY3JvbGwvIC0gc3RyYWZlQW1vdW50ICsgXCIlXCI7XHJcbiAgICAgICAgICAgIHZhciB0cmFuc2Zvcm1TdHJpbmcgPSBcInRyYW5zbGF0ZTNkKDAsXCIgKyBzdHJhZmUgKyBcIiwwXCI7XHJcblxyXG4gICAgICAgICAgICB2YXIgc3R5bGUgPSBibG9jay5zdHlsZTtcclxuICAgICAgICAgICAgc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtU3RyaW5nO1xyXG4gICAgICAgICAgICBzdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1TdHJpbmc7XHJcblxyXG4gICAgICAgICAgICBzdHlsZS50b3AgPSBzdHJhZmU7ICAgICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAod1Njcm9sbCkgeyAgXHJcbiAgICAgICAgICAgIHRoaXMubW92ZShiZywgd1Njcm9sbCwgNDUpOyAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMubW92ZShzZWN0aW9uVGV4dCwgd1Njcm9sbCwgMzApOyAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMubW92ZSh1c2VyLCB3U2Nyb2xsLCAyMCk7ICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0oKSk7XHJcblxyXG53aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbigpe1xyXG4gICAgdmFyIHdTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG4gICAgcGFyYWxsYXguaW5pdCh3U2Nyb2xsKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/modules/parallax.js\n");

/***/ })

/******/ });