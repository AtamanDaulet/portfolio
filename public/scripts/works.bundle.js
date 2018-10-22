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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/works.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/modules/blur.js":
/*!*************************************!*\
  !*** ./src/scripts/modules/blur.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar blur = function () {\n  var wrapper = document.querySelector('.js-feedback'),\n      form = document.querySelector('.feed__form_bg');\n\n  return {\n    set: function set() {\n      var imgWidth = document.querySelector('.js-blur').offsetWidth,\n          imgHeight = document.querySelector('.js-blur').offsetHeight,\n          posLeft = -wrapper.offsetLeft,\n          posTop = -wrapper.offsetTop,\n          blurCSS = form.style;\n\n      blurCSS.width = imgWidth + 'px';\n      blurCSS.height = imgHeight + 'px';\n      blurCSS.transform = 'translate(' + posLeft + 'px,' + posTop + 'px)';\n    }\n  };\n}();\n\nblur.set();\n\nwindow.onresize = function () {\n  blur.set();\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tb2R1bGVzL2JsdXIuanM/OWJjMCJdLCJuYW1lcyI6WyJibHVyIiwid3JhcHBlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZvcm0iLCJzZXQiLCJpbWdXaWR0aCIsIm9mZnNldFdpZHRoIiwiaW1nSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwicG9zTGVmdCIsIm9mZnNldExlZnQiLCJwb3NUb3AiLCJvZmZzZXRUb3AiLCJibHVyQ1NTIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsInRyYW5zZm9ybSIsIndpbmRvdyIsIm9ucmVzaXplIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLE9BQVEsWUFBVztBQUNuQixNQUFJQyxVQUFVQyxTQUFTQyxhQUFULENBQXVCLGNBQXZCLENBQWQ7QUFBQSxNQUNFQyxPQUFPRixTQUFTQyxhQUFULENBQXVCLGdCQUF2QixDQURUOztBQUdBLFNBQU87QUFDTEUsU0FBSyxlQUFXO0FBQ2QsVUFBSUMsV0FBV0osU0FBU0MsYUFBVCxDQUF1QixVQUF2QixFQUFtQ0ksV0FBbEQ7QUFBQSxVQUNFQyxZQUFZTixTQUFTQyxhQUFULENBQXVCLFVBQXZCLEVBQW1DTSxZQURqRDtBQUFBLFVBRUVDLFVBQVUsQ0FBQ1QsUUFBUVUsVUFGckI7QUFBQSxVQUdFQyxTQUFTLENBQUNYLFFBQVFZLFNBSHBCO0FBQUEsVUFJRUMsVUFBVVYsS0FBS1csS0FKakI7O0FBTUFELGNBQVFFLEtBQVIsR0FBbUJWLFFBQW5CO0FBQ0FRLGNBQVFHLE1BQVIsR0FBb0JULFNBQXBCO0FBQ0FNLGNBQVFJLFNBQVIsa0JBQWlDUixPQUFqQyxXQUE4Q0UsTUFBOUM7QUFDRDtBQVhJLEdBQVA7QUFhRCxDQWpCUyxFQUFaOztBQW1CRVosS0FBS0ssR0FBTDs7QUFFQWMsT0FBT0MsUUFBUCxHQUFrQixZQUFXO0FBQzNCcEIsT0FBS0ssR0FBTDtBQUNELENBRkQiLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb2R1bGVzL2JsdXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgYmx1ciA9IChmdW5jdGlvbigpIHtcclxuICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWZlZWRiYWNrJyksXHJcbiAgICAgIGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlZF9fZm9ybV9iZycpO1xyXG4gIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc2V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICBsZXQgaW1nV2lkdGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtYmx1cicpLm9mZnNldFdpZHRoLFxyXG4gICAgICAgICAgaW1nSGVpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWJsdXInKS5vZmZzZXRIZWlnaHQsXHJcbiAgICAgICAgICBwb3NMZWZ0ID0gLXdyYXBwZXIub2Zmc2V0TGVmdCxcclxuICAgICAgICAgIHBvc1RvcCA9IC13cmFwcGVyLm9mZnNldFRvcCxcclxuICAgICAgICAgIGJsdXJDU1MgPSBmb3JtLnN0eWxlO1xyXG5cclxuICAgICAgICBibHVyQ1NTLndpZHRoID0gYCR7aW1nV2lkdGh9cHhgO1xyXG4gICAgICAgIGJsdXJDU1MuaGVpZ2h0ID0gYCR7aW1nSGVpZ2h0fXB4YDtcclxuICAgICAgICBibHVyQ1NTLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHtwb3NMZWZ0fXB4LCR7cG9zVG9wfXB4KWA7XHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH0oKSk7XHJcbiAgXHJcbiAgYmx1ci5zZXQoKTtcclxuICBcclxuICB3aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbigpIHtcclxuICAgIGJsdXIuc2V0KCk7XHJcbiAgfTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/modules/blur.js\n");

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

/***/ }),

/***/ "./src/scripts/modules/slider.js":
/*!***************************************!*\
  !*** ./src/scripts/modules/slider.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar slides = document.querySelectorAll(\"#sliders .slide \");\nvar next = document.getElementById(\"next\");\nvar previous = document.getElementById(\"previous\");\nvar controls = document.querySelectorAll(\".controls \");\n\nvar currentSlide = 0;\n\n//осуществяет переход к слайду номер n\nfunction goToSlide(n) {\n    slides[currentSlide].className = \"name\";\n    currentSlide = (n + slides.length) % slides.length; //остаток от деления\n    slides[currentSlide].className = \"slide showing\";\n}\n\nfunction setupListners() {\n    next.onclick = function () {\n        goToSlide(currentSlide + 1);\n    };\n    previous.onclick = function () {\n        goToSlide(currentSlide - 1);\n    };\n}\n\n// показывает кнопки для навигации\nfunction showButtons() {\n    for (var i = 0; i < controls.length; i++) {\n        controls[i].style.display = \"inline-block\";\n    }\n}\n\nfunction sliderInit() {\n    if (sliderInit.length !== 0) {\n        setupListners();\n        showButtons();\n    }\n}\nmodule.exports = sliderInit;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tb2R1bGVzL3NsaWRlci5qcz9hMGNmIl0sIm5hbWVzIjpbInNsaWRlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIm5leHQiLCJnZXRFbGVtZW50QnlJZCIsInByZXZpb3VzIiwiY29udHJvbHMiLCJjdXJyZW50U2xpZGUiLCJnb1RvU2xpZGUiLCJuIiwiY2xhc3NOYW1lIiwibGVuZ3RoIiwic2V0dXBMaXN0bmVycyIsIm9uY2xpY2siLCJzaG93QnV0dG9ucyIsImkiLCJzdHlsZSIsImRpc3BsYXkiLCJzbGlkZXJJbml0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxTQUFTQyxTQUFTQyxnQkFBVCxDQUEwQixrQkFBMUIsQ0FBZjtBQUNBLElBQU1DLE9BQU9GLFNBQVNHLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBYjtBQUNBLElBQU1DLFdBQVdKLFNBQVNHLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBakI7QUFDQSxJQUFNRSxXQUFXTCxTQUFTQyxnQkFBVCxDQUEwQixZQUExQixDQUFqQjs7QUFFQSxJQUFJSyxlQUFlLENBQW5COztBQUVBO0FBQ0EsU0FBU0MsU0FBVCxDQUFtQkMsQ0FBbkIsRUFBc0I7QUFDbEJULFdBQU9PLFlBQVAsRUFBcUJHLFNBQXJCLEdBQWlDLE1BQWpDO0FBQ0FILG1CQUFlLENBQUNFLElBQUVULE9BQU9XLE1BQVYsSUFBa0JYLE9BQU9XLE1BQXhDLENBRmtCLENBRTZCO0FBQy9DWCxXQUFPTyxZQUFQLEVBQXFCRyxTQUFyQixHQUFpQyxlQUFqQztBQUNIOztBQUVELFNBQVNFLGFBQVQsR0FBeUI7QUFDckJULFNBQUtVLE9BQUwsR0FBZSxZQUFVO0FBQ3JCTCxrQkFBVUQsZUFBYSxDQUF2QjtBQUNILEtBRkQ7QUFHQUYsYUFBU1EsT0FBVCxHQUFtQixZQUFVO0FBQ3pCTCxrQkFBVUQsZUFBYSxDQUF2QjtBQUNILEtBRkQ7QUFHSDs7QUFFRDtBQUNBLFNBQVNPLFdBQVQsR0FBdUI7QUFDbkIsU0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlULFNBQVNLLE1BQTdCLEVBQXFDSSxHQUFyQyxFQUEwQztBQUN0Q1QsaUJBQVNTLENBQVQsRUFBWUMsS0FBWixDQUFrQkMsT0FBbEIsR0FBNEIsY0FBNUI7QUFDSDtBQUNKOztBQUVELFNBQVNDLFVBQVQsR0FBc0I7QUFDbEIsUUFBR0EsV0FBV1AsTUFBWCxLQUFzQixDQUF6QixFQUEyQjtBQUN2QkM7QUFDQUU7QUFDSDtBQUNKO0FBQ0RLLE9BQU9DLE9BQVAsR0FBaUJGLFVBQWpCIiwiZmlsZSI6Ii4vc3JjL3NjcmlwdHMvbW9kdWxlcy9zbGlkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzbGlkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3NsaWRlcnMgLnNsaWRlIFwiKTtcclxuY29uc3QgbmV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV4dFwiKTtcclxuY29uc3QgcHJldmlvdXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZXZpb3VzXCIpO1xyXG5jb25zdCBjb250cm9scyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29udHJvbHMgXCIpO1xyXG5cclxubGV0IGN1cnJlbnRTbGlkZSA9IDA7XHJcblxyXG4vL9C+0YHRg9GJ0LXRgdGC0LLRj9C10YIg0L/QtdGA0LXRhdC+0LQg0Log0YHQu9Cw0LnQtNGDINC90L7QvNC10YAgblxyXG5mdW5jdGlvbiBnb1RvU2xpZGUobikge1xyXG4gICAgc2xpZGVzW2N1cnJlbnRTbGlkZV0uY2xhc3NOYW1lID0gXCJuYW1lXCI7XHJcbiAgICBjdXJyZW50U2xpZGUgPSAobitzbGlkZXMubGVuZ3RoKSVzbGlkZXMubGVuZ3RoIC8v0L7RgdGC0LDRgtC+0Log0L7RgiDQtNC10LvQtdC90LjRj1xyXG4gICAgc2xpZGVzW2N1cnJlbnRTbGlkZV0uY2xhc3NOYW1lID0gXCJzbGlkZSBzaG93aW5nXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldHVwTGlzdG5lcnMoKSB7XHJcbiAgICBuZXh0Lm9uY2xpY2sgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIGdvVG9TbGlkZShjdXJyZW50U2xpZGUrMSk7XHJcbiAgICB9XHJcbiAgICBwcmV2aW91cy5vbmNsaWNrID0gZnVuY3Rpb24oKXtcclxuICAgICAgICBnb1RvU2xpZGUoY3VycmVudFNsaWRlLTEpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyDQv9C+0LrQsNC30YvQstCw0LXRgiDQutC90L7Qv9C60Lgg0LTQu9GPINC90LDQstC40LPQsNGG0LjQuFxyXG5mdW5jdGlvbiBzaG93QnV0dG9ucygpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udHJvbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb250cm9sc1tpXS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjsgICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzbGlkZXJJbml0KCkge1xyXG4gICAgaWYoc2xpZGVySW5pdC5sZW5ndGggIT09IDApe1xyXG4gICAgICAgIHNldHVwTGlzdG5lcnMoKTtcclxuICAgICAgICBzaG93QnV0dG9ucygpO1xyXG4gICAgfVxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gc2xpZGVySW5pdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/modules/slider.js\n");

/***/ }),

/***/ "./src/scripts/works.js":
/*!******************************!*\
  !*** ./src/scripts/works.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _slider = __webpack_require__(/*! ./modules/slider */ \"./src/scripts/modules/slider.js\");\n\nvar _slider2 = _interopRequireDefault(_slider);\n\n__webpack_require__(/*! ./modules/blur */ \"./src/scripts/modules/blur.js\");\n\n__webpack_require__(/*! ./modules/parallax */ \"./src/scripts/modules/parallax.js\");\n\n__webpack_require__(/*! ./modules/menu-overlay */ \"./src/scripts/modules/menu-overlay.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _slider2.default)();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy93b3Jrcy5qcz81YTc5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7OztBQUhBIiwiZmlsZSI6Ii4vc3JjL3NjcmlwdHMvd29ya3MuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2xpZGVyIGZyb20gXCIuL21vZHVsZXMvc2xpZGVyXCI7XHJcbnNsaWRlcigpO1xyXG5pbXBvcnQgXCIuL21vZHVsZXMvYmx1clwiO1xyXG5pbXBvcnQgXCIuL21vZHVsZXMvcGFyYWxsYXhcIjtcclxuaW1wb3J0IFwiLi9tb2R1bGVzL21lbnUtb3ZlcmxheVwiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/works.js\n");

/***/ })

/******/ });